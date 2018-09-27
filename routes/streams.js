const express = require('express');
const router = express.Router();
const { poolPromise } = require('../database/db')
const winston = require('winston');
const moment = require('moment');

router.get('/', async (req, res) => {
    const pool = await poolPromise;
    let results = await pool.request()
        .execute('dbo.OnlineTest_GetStreams');
        
    res.status(200).send(results.recordset);
});


module.exports = router;
