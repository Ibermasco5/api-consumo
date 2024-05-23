const express = require('express');
const router = express.Router();
const Electrodomestico = require('../models/electrodomestico');

router.post('/', (req, res) => {
    const { nombre, carga, uso_diario, dias_uso } = req.body;
    Electrodomestico.create(nombre, carga, uso_diario, dias_uso, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ id: result.insertId });
    });
});

router.get('/', (req, res) => {
    Electrodomestico.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

module.exports = router;

