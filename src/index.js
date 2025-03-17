//IMPORTO LAS BIBLIOTECAS

const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mysql = require("mysql2/promise");

async function getConnection() {
    //configuro como me voy a conectar a la base de datos
    const connectionData = {
        host: process.env["MYSQL_HOST"],
        port: process.env["MYSQL_PORT"],
        user: process.env["MYSQL_USER"],
        database: process.env["MYSQL_SCHEMA"],
    };


    const connection = await mysql.createConnection(connectionData);
    await connection.connect();

    return connection;
}

const app = express();

app.use(cors());
app.use(express.json());

//ARRANCO EL SERVIDOR
const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});

//PRIMER ENDPOINT
app.get('/', (req, res) => {
    res.send('¡Hola! Esta es la API de la guardería.');
});



//OPERACIONES CRUD

//listado de todos los alumnos
app.get("/alumnos", async (req, res) => {

    const conn = await getConnection();

    const [results] = await conn.query(`SELECT * FROM guarderia.alumnos;`);

    await conn.end();

    const numOfElements = results.length;

    res.json({
        info: { count: numOfElements }, // número de elementos
        results: results, // listado
    });
});

//mostrar un alumno por ID
app.get("/alumnos/:id", async (req, res) => {

    const conn = await getConnection();

    const [results] = await conn.query(`SELECT * FROM alumnos
WHERE id_alumno = ?;`, [req.params.id]);

    await conn.end();

    res.json({
        alumno: results[0], // asigno el resultado a la propiedad "alumno"
    });
});

//crear un nuevo alumno
app.post('/alumnos', async (req, res) => {
    // Verificar que todos los campos estén definidos
    if (
        req.body.nombre === undefined ||
        req.body.apellido === undefined ||
        req.body.fecha_nacimiento === undefined ||
        req.body.aulas_id_curso === undefined
    ) {
        return res.status(400).json({
            success: false,
            error: "Todos los campos son obligatorios: nombre, apellido, fecha_nacimiento, aulas_id_curso",
        });
    }

    const conn = await getConnection();

    try {
        // la consulta para insertar un nuevo alumno
        const [result] = await conn.execute(
            `INSERT INTO alumnos (nombre, apellido, fecha_nacimiento, aulas_id_curso) 
            VALUES (?, ?, ?, ?)`,
            [
                req.body.nombre,
                req.body.apellido,
                req.body.fecha_nacimiento,
                req.body.aulas_id_curso]
        );

        // la respuesta con el ID del nuevo alumno
        res.json({
            success: true,
            id_alumno: result.insertId,
        });
    } catch (error) {
        // Manejar errores de la base de datos
        console.error('Error al crear el alumno:', error);
        res.status(500).json({
            success: false,
            error: "Error al crear el alumno",
        });
    }
});

//actualizar un alumno existente
app.put('/alumnos/:id', async (req, res) => {
    const { id } = req.params; // Obtener el ID del alumno desde la URL
    const { nombre, apellido, fecha_nacimiento, aulas_id_curso } = req.body; // Obtener los datos del cuerpo de la solicitud

    // Verificar que todos los campos estén definidos
    if (
        nombre === undefined ||
        apellido === undefined ||
        fecha_nacimiento === undefined ||
        aulas_id_curso === undefined
    ) {
        return res.status(400).json({
            success: false,
            error: "Todos los campos son obligatorios para actualizar",
        });
    }

    const conn = await getConnection();

    try {
        // Ejecutar la consulta para actualizar el alumno
        const [result] = await conn.execute(
            'UPDATE alumnos SET nombre = ?, apellido = ?, fecha_nacimiento = ?, aulas_id_curso = ? WHERE id_alumno = ?',
            [
                nombre,
                apellido,
                fecha_nacimiento,
                aulas_id_curso,
                id]
        );

        // Cerrar la conexión
        await conn.end();

        // Verificar si se actualizó algún registro
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                error: "Alumno no encontrado",
            });
        }

        // Devolver la respuesta con éxito
        res.json({
            success: true,
            message: "Alumno actualizado correctamente",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Error al actualizar el alumno",
        });
    }
});

// eliminar un alumno
app.delete('/alumnos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const conn = await getConnection();

        const [result] = await conn.query('DELETE FROM alumnos WHERE id_alumno = ?', [id]);

        await conn.end();

        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Alumno no encontrado' });
        } else {
            res.json({ message: 'Alumno eliminado correctamente' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el alumno' });
    }
});


