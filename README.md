API de Gestión de Alumnos para una Guardería
Este proyecto es una API que te permite gestionar alumnos en una guardería. Con esta API, puedes:

Ver todos los alumnos.

Ver los detalles de un alumno.

Crear un nuevo alumno.

Actualizar la información de un alumno.

Eliminar un alumno.

¿Qué necesitas para empezar?
Node.js: Descárgalo e instálalo desde nodejs.org.

MySQL: Asegúrate de tener MySQL instalado y funcionando.

Git: Para clonar el repositorio.

Instalación
Clona el repositorio:

bash
Copy
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias:

bash
Copy
npm install
Configuración
Crea un archivo .env en la raíz del proyecto y añade lo siguiente:

env
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
Endpoints de la API
La API tiene las siguientes rutas:

1. Ver Todos los Alumnos
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
        },
        ...
    ]
}
2. Ver un Alumno por ID
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
3. Crear un Nuevo Alumno
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
4. Actualizar un Alumno
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
5. Eliminar un Alumno
Método: DELETE

URL: /alumnos/:id

Respuesta:

json
Copy
{
    "message": "Alumno eliminado correctamente"
}
Cómo Usar la API
Inicia el servidor:

bash
Copy
npm start
Usa herramientas como Postman o curl para probar los endpoints.

Ver todos los alumnos:

bash
Copy
curl -X GET http://localhost:3000/alumnos
Crear un nuevo alumno:

bash
Copy
curl -X POST http://localhost:3000/alumnos \
-H "Content-Type: application/json" \
-d '{
    "nombre": "Juan",
    "apellido": "Pérez",
    "fecha_nacimiento": "2020-05-10",
    "aulas_id_curso": 1
}'
Eliminar un alumno:

bash
Copy
curl -X DELETE http://localhost:3000/alumnos/1
Estructura de la Base de Datos
La tabla alumnos tiene las siguientes columnas:

Columna	Tipo de Dato	Descripción
id_alumno	INT	Identificador único.
nombre	VARCHAR(100)	Nombre del alumno.
apellido	VARCHAR(100)	Apellido del alumno.
fecha_nacimiento	DATE	Fecha de nacimiento del alumno.
aulas_id_curso	INT	ID del aula del alumno.
