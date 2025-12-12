-- SQL para crear la tabla messages completa con soporte para administrador
-- Ejecuta este código en el Editor SQL de Supabase si necesitas recrear la tabla

-- 1. Eliminar la tabla si existe (CUIDADO: Esto borrará todos los mensajes existentes)
DROP TABLE IF EXISTS messages;

-- 2. Crear la tabla con todos los campos necesarios
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

-- 3. Activar RLS (Row Level Security)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- 4. Crear políticas de seguridad
-- Política para permitir leer mensajes a todos
CREATE POLICY "messages_select_policy" ON messages
FOR SELECT USING (true);

-- Política para permitir insertar mensajes a todos
CREATE POLICY "messages_insert_policy" ON messages
FOR INSERT WITH CHECK (true);

-- Política para permitir actualizar mensajes a todos
CREATE POLICY "messages_update_policy" ON messages
FOR UPDATE USING (true);

-- 5. Crear índices para mejorar el rendimiento
CREATE INDEX idx_messages_created_at ON messages(created_at DESC);
CREATE INDEX idx_messages_deleted ON messages(deleted);
CREATE INDEX idx_messages_deleted_by_admin ON messages(deleted_by_admin);

-- 6. Verificar que la tabla se creó correctamente
SELECT '✅ Tabla messages creada exitosamente' as resultado;

-- 7. Verificar la estructura de la tabla
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'messages'
ORDER BY ordinal_position;

-- 8. Insertar un mensaje de prueba
INSERT INTO messages (username, content) 
VALUES ('sistema', 'Tabla messages configurada correctamente con soporte para administrador');

-- 9. Ver mensaje de prueba
SELECT * FROM messages ORDER BY id DESC LIMIT 1;

-- 10. Limpiar mensaje de prueba (opcional)
-- DELETE FROM messages WHERE username = 'sistema';