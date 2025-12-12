-- SQL para configurar la tabla messages en Supabase
-- Ejecuta este código en el Editor SQL de tu proyecto Supabase

-- 1. Agregar columnas para soportar eliminación de mensajes y administrador
ALTER TABLE messages 
ADD COLUMN IF NOT EXISTS deleted BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS deleted_by_admin BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS deleted_by TEXT;

-- 2. Crear índice para mejorar el rendimiento de consultas
CREATE INDEX IF NOT EXISTS idx_messages_deleted ON messages(deleted);
CREATE INDEX IF NOT EXISTS idx_messages_deleted_by_admin ON messages(deleted_by_admin);

-- 3. (Opcional) Si necesitas recrear la tabla completa:
/*
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  deleted BOOLEAN DEFAULT FALSE,
  deleted_at TIMESTAMP WITH TIME ZONE,
  deleted_by_admin BOOLEAN DEFAULT FALSE,
  deleted_by TEXT
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_messages_deleted ON messages(deleted);
CREATE INDEX idx_messages_deleted_by_admin ON messages(deleted_by_admin);
*/

-- 4. Verificar la estructura de la tabla
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'messages'
ORDER BY ordinal_position;

-- 5. Verificar que los índices existen
SELECT 
  indexname,
  indexdef
FROM pg_indexes
WHERE tablename = 'messages';