# Configuración de reCAPTCHA v3

## Pasos para configurar reCAPTCHA

1. **Obtener las claves de reCAPTCHA:**
   - Ve a [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
   - Crea un nuevo sitio con reCAPTCHA v3
   - Copia tu **Site Key** y **Secret Key**

2. **Configurar las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu Site Key:
     ```
     VITE_RECAPTCHA_SITE_KEY=tu_site_key_aqui
     ```

3. **Actualizar index.html:**
   - Reemplaza `6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` en el script de reCAPTCHA con tu Site Key real
   - O usa una variable de entorno si prefieres

4. **Configurar el backend:**
   - En tu endpoint `/api/contact/submit`, verifica el token de reCAPTCHA usando tu Secret Key
   - Ejemplo de verificación:
     ```javascript
     const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${recaptchaToken}`, {
       method: 'POST'
     });
     const data = await response.json();
     if (!data.success || data.score < 0.5) {
       // Bloquear el envío
     }
     ```

## Notas importantes

- reCAPTCHA v3 es invisible y no requiere interacción del usuario
- El score va de 0.0 (bot) a 1.0 (humano)
- Se recomienda bloquear envíos con score menor a 0.5
- El token de reCAPTCHA debe verificarse en el servidor, no solo en el cliente
