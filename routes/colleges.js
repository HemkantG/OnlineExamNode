const express = require('express');
const router = express.Router();
const getColleges = require('../SPCalls/GetColleges/getColleges')

router.get('/', async (req, res) => {
    const result = await getColleges();
    res.status(200).send(result.recordset);
});

module.exports = router;
