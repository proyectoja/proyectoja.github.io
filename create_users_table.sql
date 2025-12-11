-- SQL para crear la tabla de usuarios en Supabase
-- Ejecuta esto en el editor SQL de Supabase

CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL, -- En producción, usa hash (ej: bcrypt)
  display_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índice para búsquedas rápidas por username
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

-- Índice para búsquedas por display_name
CREATE INDEX IF NOT EXISTS idx_users_display_name ON users(display_name);

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at 
  BEFORE UPDATE ON users 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Política de seguridad para acceso público (ajusta según tus necesidades)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política para permitir que todos los usuarios vean los usuarios (para el chat)
CREATE POLICY "Permitir ver usuarios a todos" 
  ON users FOR SELECT 
  USING (true);

-- Política para permitir que los usuarios inserten sus propios datos
CREATE POLICY "Permitir insertar usuarios a todos" 
  ON users FOR INSERT 
  WITH CHECK (true);

-- Política para permitir que los usuarios actualicen solo sus propios datos
CREATE POLICY "Permitir actualizar usuario propio" 
  ON users FOR UPDATE 
  USING (auth.uid() IS NOT NULL AND username = current_user)
  WITH CHECK (auth.uid() IS NOT NULL AND username = current_user);

-- Insertar algunos usuarios de ejemplo (opcional)
INSERT INTO users (username, password, display_name) VALUES
  ('@juan', 'Juan123!', 'Juan Pérez'),
  ('@maria', 'Maria456@', 'María García'),
  ('@carlos', 'Carlos789#', 'Carlos López')
ON CONFLICT (username) DO NOTHING;