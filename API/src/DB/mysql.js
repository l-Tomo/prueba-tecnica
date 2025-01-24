const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let conexion;

function conMysql() {
    // Crear la conexión
    conexion = mysql.createConnection(dbconfig);

    // Intentar conectarse a la base de datos
    conexion.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(conMysql, 200); // Reintentar si hay un error
        } else {
            console.log('DB Conected :DDDD');
        }
    });

    // Manejar desconexiones
    conexion.on('error', (err) => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql(); // Reconectar si la conexión se pierde
        } else {
            throw err;
        }
    });
}

// Llamar a la función de conexión para asegurarse de que la base de datos esté conectada
conMysql();

function all(table) {
    return new Promise((resolve, reject) => {
        if (!conexion) {
            // Si la conexión no está disponible, rechazar la promesa con un mensaje de error
            return reject('No se pudo establecer la conexión con la base de datos');
        }
        
        conexion.query(`SELECT * FROM ${table}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function one(table, id) {
    return new Promise((resolve, reject) => {
        if (!conexion) {
            // Si la conexión no está disponible, rechazar la promesa con un mensaje de error
            return reject('No se pudo establecer la conexión con la base de datos');
        }
        
        conexion.query(`SELECT * FROM ${table} WHERE id=${id}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertar(table, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${table} SET ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function actualizar(table, data) {
    return new Promise((resolve, reject) => {       
        conexion.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

function add(table, data) {
    if (!data.id || data.id == 0) { // Inserta si no hay un ID
        return insertar(table, data);
    } else {
        return actualizar(table, data);
    }
}

function remove(table, id) {  // Cambié el segundo parámetro de "data" a "id"
    return new Promise((resolve, reject) => {
        if (!conexion) {
            return reject('No se pudo establecer la conexión con la base de datos');
        }
        
        conexion.query(`DELETE FROM ${table} WHERE id = ?`, [id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}


module.exports = {
    all,
    one,
    add,
    remove
};
