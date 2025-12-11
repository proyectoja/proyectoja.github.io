-- Verificar estructura de la tabla online_users

-- 1. Mostrar columnas actuales
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'online_users' 
ORDER BY ordinal_position;

-- 2. Agregar columna display_name si no existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'online_users' 
        AND column_name = 'display_se name'
    ) THEN
        ALTER TABLE online_users ADD COLUMN display_name text;
        RAISE NOTICE 'Columna display_name agregada';
    ELSE
        RAISE NOTICE 'Columna display_name ya existe';
    END IF;
END$$;

-- 3. Agregar columna username si no existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'online_users' 
        AND column_name = 'username'
    ) THEN
        ALTER TABLE online_users ADD COLUMN username text;
        RAISE NOTICE 'Columna username agregada';
    ELSE
        RAISE NOTICE 'Columna username ya existe';
    END IF;
END$$;

-- 4. Verificar que last_seen existe
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'online_users' 
        AND column_name = 'last_seen'
    ) THEN
        ALTER TABLE online_users ADD COLUMN last_seen timestamptz default now();
        RAISE NOTICE 'Columna last_seen agregada';
    ELSE
        RAISE NOTICE 'Columna last_seen ya existe';
    END IF;
END$$;

-- 5. Mostrar estructura final
SELECT column_name, data_type, is_nullable
FROM information_schema.columns 
WHERE table_name = 'online_users' 
ORDER BY ordinal_position;