"# Instrucciones para el Sistema de Chat con Login Seguro

## 🚀 Pasos para Configurar

### 1. Crear la Tabla en Supabase
1. Ve a tu proyecto de Supabase
2. Abre el Editor SQL
3. Copia y pega el contenido de `create_users_table.sql`
4. Ejecuta el SQL

### 2. Probar el Sistema

#### Para Usuarios Nuevos:
1. Abre `chatPrueba.html` en tu navegador
2. Verás la pantalla de login
3. Ingresa un usuario nuevo (ej: `@ana`)
4. Ingresa una contraseña segura que cumpla:
   - Al menos una MAYÚSCULA
   - Al menos una minúscula
   - Al menos un número
   - Al menos un carácter especial (!@#$%^&*)
   Ejemplo: `Ana123!`
5. El campo de nombre estará visible - ingresa tu nombre
6. Marca \"Recordar inicio de sesión\" si lo deseas
7. Haz clic en \"Iniciar Sesión\"
8. ¡Entrarás al chat!

#### Para Usuarios Existentes:
1. Ingresa un usuario que ya existe (ej: `@juan`)
2. Cuando salgas del campo o escribas, si el usuario existe:
   - El campo de nombre se OCULTARÁ automáticamente
   - El nombre se autocompletará
3. Ingresa la contraseña correcta
4. Inicia sesión

#### Cerrar Sesión:
1. Haz clic en \"Cerrar sesión\"
2. Confirmar
3. Volverás al login con el usuario ya completado
4. Solo necesitas ingresar la contraseña

## 🔧 Funcionalidades Implementadas

### ✅ Sistema de Login Inteligente
- Campo de nombre dinámico (se muestra/oculta según necesidad)
- Validación en tiempo real
- Auto-completado de nombre para usuarios existentes

### ✅ Validación de Contraseña Segura
- 4 requisitos de seguridad
- Validación en tiempo real con indicadores visuales
- Botón para mostrar/ocultar contraseña

### ✅ Recordar Sesión
- Opción \"Recordar inicio de sesión\"
- Auto-login al recargar la página
- Verificación en base de datos antes de auto-login

### ✅ Base de Datos
- Tabla `users` en Supabase
- Almacenamiento seguro de usuarios y contraseñas
- Actualización automática de nombres

## 🐛 Solución de Problemas

### Si el campo de nombre no aparece:
1. Asegúrate de que la tabla `users` existe en Supabase
2. Verifica la conexión a Supabase
3. Intenta con un usuario nuevo

### Si no puede iniciar sesión:
1. Verifica que la contraseña cumpla los 4 requisitos
2. Para usuarios existentes, usa la contraseña correcta
3. Revisa la consola del navegador para errores

### Si el auto-login no funciona:
1. Asegúrate de marcar \"Recordar inicio de sesión\"
2. Verifica que el usuario exista en la base de datos
3. Las credenciales deben coincidir con la base de datos

## 📝 Notas Importantes

⚠️ **SEGURIDAD EN PRODUCCIÓN:**
- Este sistema usa contraseñas en texto plano para demostración
- En producción, DEBES usar hash (bcrypt) para las contraseñas
- Considera usar la autenticación nativa de Supabase

🎨 **DISEÑO:**
- Interfaz moderna con gradientes
- Tema claro/oscuro
- Animaciones suaves
- Diseño responsive

## 📁 Archivos

1. `chatPrueba.html` - Aplicación principal
2. `create_users_table.sql` - SQL para crear la tabla
3. `INSTRUCCIONES.md` - Estas instrucciones

¡Listo para usar! 🚀"