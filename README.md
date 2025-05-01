# app-render-demo

Aplicación Node.js básica desplegada en Render, conectada a PostgreSQL.

## Cómo ejecutar localmente

1. Instalar dependencias:

npm install

2. Crear archivo `.env` (opcional) o configurar la variable `DATABASE_URL`

3. Iniciar la aplicación:

node index.js

4. Acceder en el navegador a:

http://localhost:3000

La app realiza una consulta simple a la base de datos PostgreSQL: `SELECT NOW()`.

git add README.md
git commit -m "Agregar README"
git push
