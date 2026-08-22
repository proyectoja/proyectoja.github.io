-- PASO 1: Crear la funcion (copiar y pegar en SQL Editor de Supabase)
CREATE OR REPLACE FUNCTION check_superadmin(uid UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  user_email TEXT;
BEGIN
  SELECT email INTO user_email FROM auth.users WHERE id = uid;
  RETURN user_email = 'kendall.torres.17@gmail.com';
END;
$$;

-- PASO 2: Verificar que se creo (debe retornar false)
SELECT check_superadmin('00000000-0000-0000-0000-000000000000');
