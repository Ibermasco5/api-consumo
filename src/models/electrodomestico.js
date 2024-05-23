const db = require('../db/mysql');

const Electrodomestico = {
    create: (nombre, carga, uso_diario, dias_uso, callback) => {
        const query = 'INSERT INTO electrodomesticos (nombre, carga, uso_diario, dias_uso) VALUES (?, ?, ?, ?)';
        db.query(query, [nombre, carga, uso_diario, dias_uso], callback);
    },
    getAll: (callback) => {
        const query = 'SELECT * FROM electrodomesticos';
        db.query(query, callback);
    }
};

module.exports = Electrodomestico;