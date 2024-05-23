const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.get('/', (req, res) => {
    const query = 'SELECT * FROM historial';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

module.exports = router;
