const express = require('express');
const router = express.Router();
const states = require('../data/states');

router.get('/', async (req, res) => {
    res.status(200).send(states);
});

module.exports = router;
