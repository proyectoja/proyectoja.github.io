-- Crear tabla messages si no existe
CREATE TABLE IF NOT EXISTS messages (
    id bigint generated always as identity primary key,
    username text,
    content text,
    created_at timestamptz default now()
);

-- Crear tabla typing si no existe
CREATE TABLE IF NOT EXISTS typing (
    userid text primary key,
    username text,
    typing boolean default false,
    updated_at timestamptz default now()
);

-- Activar RLS
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE typing ENABLE ROW LEVEL SECURITY;

-- Políticas simples (permitir todo)
CREATE POLICY "messages_all" ON messages FOR ALL USING (true);
CREATE POLICY "typing_all" ON typing FOR ALL USING (true);

-- Verificar estructura de online_users
-- Asegurarse de que tiene todas las columnas necesarias
ALTER TABLE online_users 
ADD COLUMN IF NOT EXISTS display_name text;

ALTER TABLE online_users 
ADD COLUMN IF NOT EXISTS username text;

-- La columna last_seen ya la tienes según tu script
-- ALTER TABLE online_users ADD COLUMN IF NOT EXISTS last_seen timestamptz default now();

-- Ver datos actuales
SELECT 'online_users' as tabla, COUNT(*) as cantidad FROM online_users
UNION ALL
SELECT 'messages' as tabla, COUNT(*) as cantidad FROM messages
UNION ALL
SELECT 'typing' as tabla, COUNT(*) as cantidad FROM typing;