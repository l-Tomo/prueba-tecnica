Gestión de Productos 
Este proyecto es el backend para una aplicación de gestión de productos. Proporciona una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos.

Requisitos Previos
Antes de iniciar, asegúrate de tener instalados los siguientes programas:

Node.js (v14 o superior)
MySQL (Base de datos)
Instalación
Sigue estos pasos para configurar y ejecutar el proyecto:

Clona el repositorio en tu máquina local:

bash
Copiar
Editar
git clone <URL_DEL_REPOSITORIO>
Navega al directorio del proyecto:

bash
Copiar
Editar
cd <NOMBRE_DEL_DIRECTORIO>
Instala las dependencias necesarias:

bash
Copiar
Editar
npm install
Crea un archivo .env en la raíz del proyecto con la siguiente configuración (ajusta según tus credenciales de MySQL):

makefile
Copiar
Editar
PORT=4000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=<TU_PASSWORD>
MYSQL_DB=almacen
Inicia el servidor:

bash
Copiar
Editar
npm start
El servidor estará disponible en http://localhost:4000.

Endpoints Disponibles
1. Productos
GET /api/productos
Obtiene una lista de todos los productos.

GET /api/productos/:id
Obtiene los detalles de un producto por su ID.

POST /api/productos
Crea un nuevo producto o actualiza uno existente.

Cuerpo de la solicitud:
json
Copiar
Editar
{
  "id": 1, // Opcional para crear; obligatorio para actualizar
  "nombre": "Producto A",
  "descripcion": "Descripción del producto",
  "id_categoria": 1
}
PUT /api/productos
Elimina un producto existente por su ID.

Cuerpo de la solicitud:
json
Copiar
Editar
{
  "id": 1
}
Base de Datos
Este proyecto utiliza MySQL como base de datos. Asegúrate de crear la base de datos y la tabla antes de ejecutar el servidor.

Script SQL para Crear la Base de Datos y Tabla
sql
Copiar
Editar
CREATE DATABASE almacen;

USE almacen;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    id_categoria INT NOT NULL
);

Scripts Disponibles
npm start
Inicia el servidor en modo de producción.

npm run dev
Inicia el servidor en modo de desarrollo con recarga automática.

Pruebas
Puedes probar los endpoints utilizando herramientas como Postman o cURL.

Ejemplo de Solicitud con Postman
Endpoint: POST /api/productos

Cuerpo (JSON):

json
Copiar
Editar
{
  "nombre": "Producto Nuevo",
  "descripcion": "Descripción del producto",
  "id_categoria": 1
}
Respuesta Esperada (JSON):

json
Copiar
Editar
{
  "status": "success",
  "message": "Item guardado con éxito"
}
Más Información
Tecnologías Usadas
Node.js: Plataforma para ejecutar JavaScript en el servidor.
Express.js: Framework para crear aplicaciones web y APIs.
MySQL: Base de datos relacional para almacenar los productos.
