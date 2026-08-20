-- =============================================
-- SETUP COMPLETO DE SUPABASE PARA CONEXAN
-- Copiar y pegar en: Supabase Dashboard > SQL Editor
-- =============================================

-- 1. Tabla profiles
CREATE TABLE IF NOT EXISTS profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL DEFAULT '',
  info TEXT DEFAULT '',
  photo_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Validaciones server-side (CHECK constraints)
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_username_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_username_check
  CHECK (length(username) >= 1 AND length(username) <= 100);

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_display_name_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_display_name_check
  CHECK (length(display_name) >= 1 AND length(display_name) <= 100);

ALTER TABLE profiles DROP CONSTRAINT IF EXISTS profiles_info_check;
ALTER TABLE profiles ADD CONSTRAINT profiles_info_check
  CHECK (length(info) <= 500);

-- 3. RLS: habilitar
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 4. RLS: politicas
DROP POLICY IF EXISTS "own_profile_all" ON profiles;
CREATE POLICY "own_profile_all"
  ON profiles FOR ALL
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "search_usernames" ON profiles;
CREATE POLICY "search_usernames"
  ON profiles FOR SELECT
  TO authenticated
  USING (true);

-- 5. Trigger: auto-crear perfil al registrar usuario
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  _username TEXT;
  _display_name TEXT;
BEGIN
  _username := COALESCE(
    new.raw_user_meta_data->>'username',
    split_part(new.email, '@', 1)
  );
  _display_name := COALESCE(
    new.raw_user_meta_data->>'display_name',
    split_part(new.email, '@', 1)
  );

  -- Validar username (server-side)
  _username := lower(regexp_replace(_username, '[^a-z0-9_]', '', 'g'));
  IF length(_username) < 1 THEN
    _username := split_part(new.email, '@', 1);
  END IF;
  IF length(_username) > 100 THEN
    _username := left(_username, 100);
  END IF;

  -- Validar display_name (server-side)
  IF length(_display_name) < 1 THEN
    _display_name := split_part(new.email, '@', 1);
  END IF;
  IF length(_display_name) > 100 THEN
    _display_name := left(_display_name, 100);
  END IF;

  INSERT INTO public.profiles (user_id, username, display_name)
  VALUES (new.id, _username, _display_name);

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 6. Funcion para validar actualizaciones de perfil
CREATE OR REPLACE FUNCTION public.validate_profile_update()
RETURNS trigger AS $$
BEGIN
  -- Validar username
  IF length(NEW.username) < 1 OR length(NEW.username) > 100 THEN
    RAISE EXCEPTION 'Username debe tener entre 1 y 100 caracteres';
  END IF;
  IF NEW.username !~ '^[a-z0-9_]+$' THEN
    RAISE EXCEPTION 'Username solo puede contener minusculas, numeros y guion bajo';
  END IF;

  -- Validar display_name
  IF length(NEW.display_name) < 1 OR length(NEW.display_name) > 100 THEN
    RAISE EXCEPTION 'Nombre debe tener entre 1 y 100 caracteres';
  END IF;

  -- Validar info
  IF length(NEW.info) > 500 THEN
    RAISE EXCEPTION 'Informacion maximo 500 caracteres';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS validate_profile_update ON profiles;
CREATE TRIGGER validate_profile_update
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.validate_profile_update();
