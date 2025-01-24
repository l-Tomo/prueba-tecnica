const db = require('../../DB/mysql');
const table = 'productos';

function all() {
    return db.all(table);
}

function one(id) {
    return db.one(table, id);
}

function remove(body) {
    return db.remove(table, body);
}

function add(data) {
    return db.add(table, data); // Cambié el parámetro a 'data'
}

module.exports = {
    all,
    one,
    remove,
    add
};
