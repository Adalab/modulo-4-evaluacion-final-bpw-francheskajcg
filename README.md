# API de Gestión de Alumnos para una Guardería 🏫👶

Este proyecto es una **API** que te permite gestionar alumnos en una guardería. Con esta API, puedes:

- **Ver** todos los alumnos.
- **Ver** los detalles de un alumno.
- **Crear** un nuevo alumno.
- **Actualizar** la información de un alumno.
- **Eliminar** un alumno.

---

## **¿Qué necesitas para empezar?**  🚀

1. **Node.js**: Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/).
2. **MySQL**: Asegúrate de tener MySQL instalado y funcionando.
3. **Git**: Para clonar el repositorio.

---

## **Instalación**

 1. **Clona el repositorio:**

 git clone https://github.com/tu-usuario/tu-repositorio.git
 cd tu-repositorio 

 2. **Instala las dependencias:**
 
 npm install

 ---
 
 ## **Configuración**
 
 1. **Crea un archivo .env en la raíz del proyecto y añade lo siguiente:**

MYSQL_HOST=localhost


MYSQL_PORT=3306


MYSQL_USER=root


MYSQL_SCHEMA=guarderia
 
 
 2. **Crea la base de datos y la tabla alumnos en MySQL:**

 
 CREATE TABLE alumnos (

 
     id_alumno INT AUTO_INCREMENT PRIMARY KEY,

     
     nombre VARCHAR(100) NOT NULL,

     
     apellido VARCHAR(100) NOT NULL,

     
     fecha_nacimiento DATE NOT NULL,

     
     aulas_id_curso INT NOT NULL

     
 )

 ---
 
 ## **Endpoints de la API**
 
 1. **Ver Todos los Alumnos**

    
 Método: GET
 
 URL: /alumnos
 
 Respuesta: Lista de todos los alumnos.
 
 2. **Ver un Alumno por ID**

    
 Método: GET
 
 URL: /alumnos/:id
 
 Respuesta: Detalles de un alumno específico.
 
 3. **Crear un Nuevo Alumno**

    
 Método: POST
 
 URL: /alumnos
 
 Body: Datos del nuevo alumno (nombre, apellido, fecha_nacimiento, aulas_id_curso).
 
 Respuesta: ID del alumno creado.
 
 4. **Actualizar un Alumno**

    
 Método: PUT
 
 URL: /alumnos/:id
 
 Body: Nuevos datos del alumno.
 
 Respuesta: Mensaje de éxito.
 
 5. **Eliminar un Alumno**

    
 Método: DELETE
 
 URL: /alumnos/:id
 
 Respuesta: Mensaje de éxito.

 ---
 
 ## **Bibliotecas Utilizadas**
 Este proyecto utiliza las siguientes bibliotecas:
 
 1. express:
 
 Es un framework para Node.js que facilita la creación de servidores web y APIs.
 
 Lo usamos para manejar las rutas y las solicitudes HTTP (GET, POST, PUT, DELETE).
 
 2. cors:
 
 Es un middleware que permite a nuestro servidor aceptar solicitudes desde diferentes dominios.
 
 Lo usamos para evitar problemas cuando el frontend y el backend están en servidores diferentes.
 
 3. dotenv:
 
 Es una librería que nos permite cargar variables de entorno desde un archivo .env.
 
 Lo usamos para mantener seguras las credenciales de la base de datos (como el usuario y la contraseña).
 
 4. mysql2/promise:
 
 Es una librería para conectarse a una base de datos MySQL.
 
 La versión promise nos permite usar async/await en lugar de callbacks, lo que hace el código más fácil de leer.
 
 ## **Autor**
 
 Francheska Contreras García




