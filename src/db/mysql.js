const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql-iberg.alwaysdata.net',
    user: 'iberg',
    password: 'MDia0925',
    database: 'iberg_consumo'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
