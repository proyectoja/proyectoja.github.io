-- Crear tabla typing para el indicador "escribiendo..."
CREATE TABLE IF NOT EXISTS typing (
    userid text primary key,
    username text,
    typing boolean default false,
    updated_at timestamptz default now()
);

-- Activar RLS (Row Level Security)
ALTER TABLE typing ENABLE ROW LEVEL SECURITY;

-- Política para permitir todo en la tabla typing
CREATE POLICY "typing_all_policy" ON typing
    FOR ALL USING (true);

-- Verificar que se creó
SELECT 'Tabla typing creada' as resultado;