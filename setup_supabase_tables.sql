-- Script para configurar las tablas en Supabase

-- 1. Tabla online_users (ya la tienes, solo verificar)
-- Verificar estructura:
/*
CREATE TABLE IF NOT EXISTS online_users (
    id bigint generated always as identity primary key,
    userid text unique,
    username text,
    display_name text,
    connected_at timestamptz default now(),
    last_seen timestamptz default now()
);
*/

-- 2. Tabla messages (para el chat)
CREATE TABLE IF NOT EXISTS messages (
    id bigint generated always as identity primary key,
    username text,
    content text,
    created_at timestamptz default now()
);

-- 3. Tabla typing (para indicador "escribiendo...")
CREATE TABLE IF NOT EXISTS typing (
    userid text primary key,
    username text,
    typing boolean default false,
    updated_at timestamptz default now()
);

-- Políticas RLS para messages
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "messages_select_policy" ON messages
    FOR SELECT USING (true);

CREATE POLICY "messages_insert_policy" ON messages
    FOR INSERT WITH CHECK (true);

-- Políticas RLS para typing
ALTER TABLE typing ENABLE ROW LEVEL SECURITY;

CREATE POLICY "typing_select_policy" ON typing
    FOR SELECT USING (true);

CREATE POLICY "typing_insert_policy" ON typing
    FOR INSERT WITH CHECK (true);

CREATE POLICY "typing_update_policy" ON typing
    FOR UPDATE USING (true);

-- Verificar que online_users tenga las políticas correctas
-- (Ya las tienes según tu script)

-- Insertar datos de prueba (opcional)
-- INSERT INTO messages (username, content) VALUES ('Usuario1', '¡Hola!');
-- INSERT INTO messages (username, content) VALUES ('Usuario2', '¿Cómo están?');