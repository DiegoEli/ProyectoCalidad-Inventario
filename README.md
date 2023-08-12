# Proyecto Calidad - Inventario

Este proyecto consiste en un software de inventario desarrollado con Angular, Express.js y MySql. A continuación se detallan las configuraciones y los comandos necesarios para ejecutar el proyecto.

Antes de ejecutar la API en Express.js, asegúrese de haber ejecutado el script SQL en su gestor de base de datos MySQL Workbench 8.0 CE.

## Configuración de MySql (Importante).
1. Ejecute el siguiente comando SQL para permitir la autenticación adecuada:

   ```sql
   ALTER USER 'you_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'you_password';
   ```

## Configuración de Angular (Importante).
1. Ejecute el siguiente comando para instalar Angular CLI:

   ```
   npm install -g @angular/cli
   ```

## Ejecución del proyecto en Angular
1. Inicie el servidor de desarrollo de Angular utilizando el siguiente comando:

   ```
   ng serve --o
   ```

El proyecto de Angular se abrirá automáticamente en su navegador predeterminado.


## Ejecución de la API en Express.js
1. Inicie el servidor con nodemon de la API utilizando el siguiente comando:

   ```
   npm run dev
   ```

La API se ejecutará y estará lista para recibir solicitudes.

**Observaciones**: Recuerde que es importante tener una conexión establecida con su base de datos antes de ejecutar la API para evitar errores.
