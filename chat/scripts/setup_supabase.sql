-- =============================================
-- SETUP COMPLETO SUPABASE - CONEXAN
-- Copiar TODO y ejecutar en SQL Editor
-- No borra tablas existentes, solo crea las que falten
-- =============================================

-- =============================================
-- TABLA DE PERFILES (solo crear si no existe)
-- =============================================
CREATE TABLE IF NOT EXISTS profiles (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT DEFAULT '',
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL DEFAULT '',
  info TEXT DEFAULT '',
  photo_url TEXT DEFAULT '',
  last_profile_edit TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Agregar columna email si la tabla ya existe pero no la tiene
DO $$ BEGIN
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS email TEXT DEFAULT '';
EXCEPTION WHEN duplicate_column THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS last_seen TIMESTAMPTZ DEFAULT now();
EXCEPTION WHEN duplicate_column THEN NULL;
END $$;

-- Sincronizar email de usuarios existentes desde auth.users
UPDATE profiles SET email = au.email FROM auth.users au WHERE profiles.user_id = au.id AND (profiles.email IS NULL OR profiles.email = '');

DO $$ BEGIN
  CREATE POLICY "own_profile_all" ON profiles FOR ALL USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "search_usernames" ON profiles FOR SELECT TO authenticated USING (true);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- Trigger: crear perfil al registrar usuario
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
  INSERT INTO public.profiles (user_id, username, display_name, email) VALUES (new.id, _final_username, _display_name, new.email);
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger: validar edicion de perfil
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
  IF NEW.username IS DISTINCT FROM OLD.username THEN
    IF OLD.last_profile_edit IS NOT NULL AND (now() - OLD.last_profile_edit) < interval '30 days' THEN
      RAISE EXCEPTION 'Solo puedes cambiar usuario o contrasena una vez cada 30 dias';
    END IF;
    NEW.last_profile_edit := now();
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_profile_update ON profiles;
CREATE TRIGGER validate_profile_update
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION public.validate_profile_update();

-- =============================================
-- TABLA DE CONTACTOS (solo crear si no existe)
-- =============================================
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  contact_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  contact_email TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, contact_id)
);

-- Agregar columna contact_email si la tabla ya existe pero no la tiene
DO $$ BEGIN
  ALTER TABLE contacts ADD COLUMN IF NOT EXISTS contact_email TEXT;
EXCEPTION WHEN duplicate_column THEN NULL;
END $$;

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  CREATE POLICY "users_select_own_contacts" ON contacts FOR SELECT USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "users_insert_own_contacts" ON contacts FOR INSERT WITH CHECK (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "users_delete_own_contacts" ON contacts FOR DELETE USING (auth.uid() = user_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_contacts_user ON contacts(user_id);
CREATE INDEX IF NOT EXISTS idx_contacts_contact ON contacts(contact_id);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(contact_email);

-- =============================================
-- TABLA DE MENSAJES DIRECTOS (solo crear si no existe)
-- =============================================
CREATE TABLE IF NOT EXISTS direct_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  read BOOLEAN DEFAULT false,
  delivered BOOLEAN DEFAULT false,
  reply_to_id UUID
);

ALTER TABLE direct_messages ENABLE ROW LEVEL SECURITY;

-- Habilitar Realtime para mensajes directos
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE direct_messages;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE POLICY "users_select_own_messages" ON direct_messages FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "users_send_messages" ON direct_messages FOR INSERT WITH CHECK (auth.uid() = sender_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "users_update_read_messages" ON direct_messages FOR UPDATE USING (auth.uid() = sender_id OR auth.uid() = receiver_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
DO $$ BEGIN
  CREATE POLICY "users_delete_own_messages" ON direct_messages FOR DELETE USING (auth.uid() = sender_id);
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

CREATE INDEX IF NOT EXISTS idx_dm_conversation ON direct_messages(sender_id, receiver_id, created_at);
CREATE INDEX IF NOT EXISTS idx_dm_receiver ON direct_messages(receiver_id, read);

-- =============================================
-- STORAGE AVATARS
-- =============================================
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

-- =============================================
-- GRUPOS
-- =============================================
CREATE TABLE IF NOT EXISTS groups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  info TEXT DEFAULT '',
  photo_url TEXT DEFAULT '',
  owner_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  settings_can_edit BOOLEAN DEFAULT true,
  settings_can_send BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS group_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT DEFAULT 'member', -- owner | admin | member
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(group_id, user_id)
);

CREATE TABLE IF NOT EXISTS group_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE NOT NULL,
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  reply_to_id UUID
);

ALTER TABLE direct_messages ADD COLUMN IF NOT EXISTS reply_to_id UUID;
ALTER TABLE group_messages ADD COLUMN IF NOT EXISTS reply_to_id UUID;

ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_messages ENABLE ROW LEVEL SECURITY;

-- Realtime para mensajes de grupo
DO $$ BEGIN
  ALTER PUBLICATION supabase_realtime ADD TABLE group_messages;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- RLS groups
-- Funciones auxiliares SECURITY DEFINER: evitan recursion de RLS
CREATE OR REPLACE FUNCTION is_group_member(gid UUID, uid UUID)
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM group_members gm WHERE gm.group_id = gid AND gm.user_id = uid);
$$;

CREATE OR REPLACE FUNCTION is_group_admin(gid UUID, uid UUID)
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM group_members gm WHERE gm.group_id = gid AND gm.user_id = uid AND gm.role IN ('owner','admin'));
$$;

CREATE OR REPLACE FUNCTION is_group_owner(gid UUID, uid UUID)
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM groups g WHERE g.id = gid AND g.owner_id = uid);
$$;

DROP POLICY IF EXISTS "group_select_members" ON groups;
DROP POLICY IF EXISTS "group_insert_owner" ON groups;
DROP POLICY IF EXISTS "group_update_owner_admin" ON groups;
DROP POLICY IF EXISTS "group_delete_owner" ON groups;
CREATE POLICY "group_select_members" ON groups FOR SELECT
  USING (is_group_member(groups.id, auth.uid()) OR groups.owner_id = auth.uid());
CREATE POLICY "group_insert_owner" ON groups FOR INSERT
  WITH CHECK (auth.uid() = owner_id);
CREATE POLICY "group_update_owner_admin" ON groups FOR UPDATE
  USING (
    is_group_admin(groups.id, auth.uid())
    OR
    (is_group_member(groups.id, auth.uid()) AND groups.settings_can_edit)
  )
  WITH CHECK (
    is_group_admin(groups.id, auth.uid())
    OR
    (is_group_member(groups.id, auth.uid()) AND groups.settings_can_edit)
  );
CREATE POLICY "group_delete_owner" ON groups FOR DELETE
  USING (is_group_owner(groups.id, auth.uid()));

-- RLS group_members (usar la funcion para evitar recursion)
DROP POLICY IF EXISTS "gm_select_members" ON group_members;
DROP POLICY IF EXISTS "gm_insert_owner_admin" ON group_members;
DROP POLICY IF EXISTS "gm_update_owner_admin" ON group_members;
DROP POLICY IF EXISTS "gm_delete_owner_admin" ON group_members;
CREATE POLICY "gm_select_members" ON group_members FOR SELECT
  USING (is_group_member(group_members.group_id, auth.uid()));
CREATE POLICY "gm_insert_owner_admin" ON group_members FOR INSERT
  WITH CHECK (is_group_admin(group_members.group_id, auth.uid())
            OR is_group_owner(group_members.group_id, auth.uid()));
CREATE POLICY "gm_update_owner_admin" ON group_members FOR UPDATE
  USING (
    (is_group_admin(group_members.group_id, auth.uid()) AND (SELECT role FROM group_members g3 WHERE g3.id = group_members.id) = 'member')
    OR
    (is_group_owner(group_members.group_id, auth.uid()) AND (SELECT role FROM group_members g3 WHERE g3.id = group_members.id) IN ('member','admin'))
  )
  WITH CHECK (is_group_owner(group_members.group_id, auth.uid())
            OR (is_group_admin(group_members.group_id, auth.uid()) AND group_members.role = (SELECT role FROM group_members g3 WHERE g3.id = group_members.id)));
CREATE POLICY "gm_delete_owner_admin" ON group_members FOR DELETE
  USING (
    (is_group_admin(group_members.group_id, auth.uid()) AND (SELECT role FROM group_members g3 WHERE g3.id = group_members.id) = 'member')
    OR
    (is_group_owner(group_members.group_id, auth.uid()) AND (SELECT role FROM group_members g3 WHERE g3.id = group_members.id) IN ('member','admin'))
  );
-- Permitir que un miembro se auto-elimine (salir del grupo)
DROP POLICY IF EXISTS "gm_delete_self" ON group_members;
CREATE POLICY "gm_delete_self" ON group_members FOR DELETE
  USING (group_members.user_id = auth.uid() AND (SELECT role FROM group_members g3 WHERE g3.id = group_members.id) <> 'owner');

-- RLS group_messages
DROP POLICY IF EXISTS "gmsg_select_members" ON group_messages;
DROP POLICY IF EXISTS "gmsg_insert_members" ON group_messages;
DROP POLICY IF EXISTS "gm_select_members" ON group_messages;
DROP POLICY IF EXISTS "gm_insert_members" ON group_messages;
CREATE POLICY "gmsg_select_members" ON group_messages FOR SELECT
  USING (is_group_member(group_messages.group_id, auth.uid()));
CREATE POLICY "gmsg_insert_members" ON group_messages FOR INSERT
  WITH CHECK (
    is_group_member(group_messages.group_id, auth.uid())
    AND (
      is_group_admin(group_messages.group_id, auth.uid())
      OR
      NOT EXISTS (SELECT 1 FROM groups g WHERE g.id = group_messages.group_id AND NOT g.settings_can_send)
    )
  );
-- Eliminar mensajes: propio siempre, o cualquier si es admin/owner
DROP POLICY IF EXISTS "gmsg_delete_messages" ON group_messages;
CREATE POLICY "gmsg_delete_messages" ON group_messages FOR DELETE
  USING (
    group_messages.sender_id = auth.uid()
    OR is_group_admin(group_messages.group_id, auth.uid())
  );

CREATE INDEX IF NOT EXISTS idx_gm_group_user ON group_members(group_id, user_id);
CREATE INDEX IF NOT EXISTS idx_gmsg_group ON group_messages(group_id, created_at);

SELECT 'Setup completo OK' AS resultado;
