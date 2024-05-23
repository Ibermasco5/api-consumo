const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.post('/', (req, res) => {
    const { tarifa } = req.body;
    const query = 'INSERT INTO tarifas (tarifa) VALUES (?)';
    db.query(query, [tarifa], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
});

module.exports = router;
