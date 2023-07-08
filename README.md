# Proyecto Calidad - Inventario

Este proyecto consiste en un software de inventario desarrollado con Angular y Express.js. A continuación se detallan los comandos necesarios para ejecutar el proyecto.

## Ejecución del proyecto en Angular

1. Navegue hasta la carpeta del proyecto usando el siguiente comando:
   ```
   cd ruta_proyecto
   ```

2. Abra el proyecto en su editor de código preferido utilizando el siguiente comando:
   ```
   code .
   ```

3. Inicie el servidor de desarrollo de Angular utilizando el siguiente comando:
   ```
   ng serve --o
   ```

El proyecto de Angular se abrirá automáticamente en su navegador predeterminado.

## Ejecución de la API en Express.js

Antes de ejecutar la API en Express.js, asegúrese de haber ejecutado el script SQL en su gestor de base de datos MySQL Workbench 8.0 CE.

1. Inicialice un nuevo proyecto de Node.js ejecutando el siguiente comando:
   ```
   npm init
   ```

2. Instale las dependencias necesarias ejecutando el siguiente comando:
   ```
   npm install express mysql body-parser --save
   ```

3. Instale la herramienta nodemon como dependencia de desarrollo ejecutando el siguiente comando:
   ```
   npm install nodemon --save-dev
   ```

4. Instale las dependencias adicionales necesarias ejecutando el siguiente comando:
   ```
   npm install express-handlebars express-myconnection
   ```

5. Inicie la API utilizando el siguiente comando:
   ```
   npm run dev
   ```

La API se ejecutará y estará lista para recibir solicitudes.

Recuerde que es importante tener una conexión establecida con su base de datos antes de ejecutar la API para evitar errores.

¡Ahora está listo para utilizar el software de inventario!
