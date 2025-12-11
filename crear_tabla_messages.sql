-- Crear tabla messages para el chat
CREATE TABLE IF NOT EXISTS messages (
    id bigint generated always as identity primary key,
    username text,
    content text,
    created_at timestamptz default now()
);

-- Activar RLS (Row Level Security)
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Política para permitir leer mensajes a todos
CREATE POLICY "messages_select_policy" ON messages
    FOR SELECT USING (true);

-- Política para permitir insertar mensajes a todos
CREATE POLICY "messages_insert_policy" ON messages
    FOR INSERT WITH CHECK (true);

-- Verificar que se creó
SELECT 'Tabla messages creada' as resultado;