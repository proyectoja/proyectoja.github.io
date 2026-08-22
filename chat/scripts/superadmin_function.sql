-- =============================================
-- FUNCION SUPERADMIN - Ejecutar en SQL Editor de Supabase
-- =============================================
-- Esta funcion verifica si un usuario es superadmin
-- comparando su correo (guardado en auth.users) contra
-- el correo del superadmin hardcodeado AQUI en el servidor.
-- El correo NUNCA se expone en el frontend.
-- =============================================

-- Eliminar si existe
DROP FUNCTION IF EXISTS check_superadmin(UUID);

-- Crear la funcion
CREATE OR REPLACE FUNCTION check_superadmin(uid UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
DECLARE
  user_email TEXT;
BEGIN
  SELECT email INTO user_email FROM auth.users WHERE id = uid;
  RETURN user_email = 'kendall.torres.17@gmail.com';
END;
$$;

-- Verificar que funciona (debe retornar false para cualquier usuario aleatorio)
SELECT check_superadmin('00000000-0000-0000-0000-000000000000') AS test_result;
