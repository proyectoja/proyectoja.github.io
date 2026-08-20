-- =============================================
-- SETUP COMPLETO SUPABASE - CONEXAN
-- Copiar TODO y ejecutar en SQL Editor
-- =============================================

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS validate_profile_update ON profiles;
DROP FUNCTION IF EXISTS public.handle_new_user();
DROP FUNCTION IF EXISTS public.validate_profile_update();
DROP POLICY IF EXISTS "own_profile_all" ON profiles;
DROP POLICY IF EXISTS "search_usernames" ON profiles;
DROP TABLE IF EXISTS profiles CASCADE;

CREATE TABLE profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL DEFAULT '',
  info TEXT DEFAULT '',
  photo_url TEXT DEFAULT '',
  last_profile_edit TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "own_profile_all" ON profiles FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "search_usernames" ON profiles FOR SELECT TO authenticated USING (true);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _username TEXT;
  _display_name TEXT;
  _final_username TEXT;
  _suffix INT := 0;
BEGIN
  _username := COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1));
  _display_name := COALESCE(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1));
  _username := lower(regexp_replace(_username, '[^a-z0-9_]', '', 'g'));
  IF length(_username) < 1 THEN _username := split_part(new.email, '@', 1); END IF;
  IF length(_username) > 100 THEN _username := left(_username, 100); END IF;
  IF length(_display_name) < 1 THEN _display_name := split_part(new.email, '@', 1); END IF;
  IF length(_display_name) > 100 THEN _display_name := left(_display_name, 100); END IF;
  _final_username := _username;
  WHILE EXISTS (SELECT 1 FROM profiles WHERE username = _final_username) LOOP
    _suffix := _suffix + 1;
    _final_username := left(_username, 95) || '_' || _suffix::text;
  END LOOP;
  INSERT INTO public.profiles (user_id, username, display_name) VALUES (new.id, _final_username, _display_name);
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.validate_profile_update()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF length(NEW.username) < 1 OR length(NEW.username) > 100 THEN RAISE EXCEPTION 'Username entre 1 y 100'; END IF;
  IF NEW.username !~ '^[a-z0-9_]+$' THEN RAISE EXCEPTION 'Username solo minusculas, numeros, guion bajo'; END IF;
  IF length(NEW.display_name) < 1 OR length(NEW.display_name) > 100 THEN RAISE EXCEPTION 'Nombre entre 1 y 100'; END IF;
  IF length(NEW.info) > 500 THEN RAISE EXCEPTION 'Info maximo 500'; END IF;
  -- Bloquear usuario si se cambio hace menos de 30 dias (solo si username cambio)
  IF NEW.username IS DISTINCT FROM OLD.username THEN
    IF OLD.last_profile_edit IS NOT NULL AND (now() - OLD.last_profile_edit) < interval '30 days' THEN
      RAISE EXCEPTION 'Solo puedes cambiar usuario o contrasena una vez cada 30 dias';
    END IF;
    NEW.last_profile_edit := now();
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_profile_update
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.validate_profile_update();

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('avatars', 'avatars', true, 1048576, ARRAY['image/jpeg','image/png','image/webp','image/gif'])
ON CONFLICT (id) DO UPDATE SET public=true, file_size_limit=1048576, allowed_mime_types=ARRAY['image/jpeg','image/png','image/webp','image/gif'];

DROP POLICY IF EXISTS "avatar_upload_own" ON storage.objects;
CREATE POLICY "avatar_upload_own" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "avatar_read_public" ON storage.objects;
CREATE POLICY "avatar_read_public" ON storage.objects FOR SELECT TO public USING (bucket_id = 'avatars');

DROP POLICY IF EXISTS "avatar_update_own" ON storage.objects;
CREATE POLICY "avatar_update_own" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

DROP POLICY IF EXISTS "avatar_delete_own" ON storage.objects;
CREATE POLICY "avatar_delete_own" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

SELECT 'Setup completo OK' AS resultado;
