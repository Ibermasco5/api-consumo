const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.post('/', (req, res) => {
    const { id_electrodomestico } = req.body;
    const queryElectrodomestico = 'SELECT * FROM electrodomesticos WHERE id = ?';
    const queryTarifa = 'SELECT tarifa FROM tarifas ORDER BY id DESC LIMIT 1';

    db.query(queryElectrodomestico, [id_electrodomestico], (err, resultsElectro) => {
        if (err) return res.status(500).send(err);
        if (resultsElectro.length === 0) return res.status(404).send('Electrodoméstico no encontrado.');

        const electrodomestico = resultsElectro[0];
        const consumo_total = (electrodomestico.carga * electrodomestico.uso_diario * electrodomestico.dias_uso) / 1000;

        db.query(queryTarifa, (err, resultsTarifa) => {
            if (err) return res.status(500).send(err);
            if (resultsTarifa.length === 0) return res.status(404).send('Tarifa no configurada.');

            const tarifa = resultsTarifa[0].tarifa;
            const costo_total = consumo_total * tarifa;

            const insertHistorial = 'INSERT INTO historial (id_electrodomestico, consumo_total, costo_total, fecha_calculo) VALUES (?, ?, ?, NOW())';
            db.query(insertHistorial, [id_electrodomestico, consumo_total, costo_total], (err, result) => {
                if (err) return res.status(500).send(err);
                res.send({ consumo_total, costo_total });
            });
        });
    });
});

module.exports = router;
