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

Clona el repositorio:

bash

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

Instala las dependencias:

bash

npm install
Configuración
Crea un archivo .env en la raíz del proyecto y añade lo siguiente:

bash
Copy
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_SCHEMA=guarderia
MYSQL_HOST: Dirección de tu servidor MySQL (normalmente localhost).

MYSQL_PORT: Puerto de MySQL (normalmente 3306).

MYSQL_USER: Tu usuario de MySQL.

MYSQL_SCHEMA: Nombre de la base de datos.

Crea la base de datos y la tabla alumnos en MySQL:

sql
Copy
CREATE DATABASE guarderia;

USE guarderia;

CREATE TABLE alumnos (
    id_alumno INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    aulas_id_curso INT NOT NULL
);
Endpoints de la API 🌐
1. Ver Todos los Alumnos 👥
Método: GET

URL: /alumnos

Respuesta:

json
Copy
{
    "info": { "count": 3 },
    "results": [
        {
            "id_alumno": 1,
            "nombre": "Lucía",
            "apellido": "Pérez",
            "fecha_nacimiento": "2019-05-10",
            "aulas_id_curso": 1
        }
    ]
}
2. Ver un Alumno por ID 👤
Método: GET

URL: /alumnos/:id

Respuesta:

json
Copy
{
    "alumno": {
        "id_alumno": 1,
        "nombre": "Lucía",
        "apellido": "Pérez",
        "fecha_nacimiento": "2019-05-10",
        "aulas_id_curso": 1
    }
}
3. Crear un Nuevo Alumno ➕
Método: POST

URL: /alumnos

Body:

json
Copy
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "fecha_nacimiento": "2020-05-10",
    "aulas_id_curso": 1
}
Respuesta:

json
Copy
{
    "success": true,
    "id_alumno": 4
}
4. Actualizar un Alumno ✏️
Método: PUT

URL: /alumnos/:id

Body:

json
Copy
{
    "nombre": "Juan",
    "apellido": "Pérez",
    "fecha_nacimiento": "2020-05-10",
    "aulas_id_curso": 2
}
Respuesta:

json
Copy
{
    "success": true,
    "message": "Alumno actualizado correctamente"
}
5. Eliminar un Alumno 🗑️
Método: DELETE

URL: /alumnos/:id

Respuesta:

json
Copy
{
    "message": "Alumno eliminado correctamente"
}
Bibliotecas Utilizadas 📚
Este proyecto utiliza las siguientes bibliotecas:

express:

Es un framework para Node.js que facilita la creación de servidores web y APIs.

Lo usamos para manejar las rutas y las solicitudes HTTP (GET, POST, PUT, DELETE).

cors:

Es un middleware que permite a nuestro servidor aceptar solicitudes desde diferentes dominios.

Lo usamos para evitar problemas cuando el frontend y el backend están en servidores diferentes.

dotenv:

Es una librería que nos permite cargar variables de entorno desde un archivo .env.

Lo usamos para mantener seguras las credenciales de la base de datos (como el usuario y la contraseña).

mysql2/promise:

Es una librería para conectarse a una base de datos MySQL.

La versión promise nos permite usar async/await en lugar de callbacks, lo que hace el código más fácil de leer.

Autor
Francheska Contreras García






