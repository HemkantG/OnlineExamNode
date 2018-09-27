const express = require('express');
const router = express.Router();
const { poolPromise } = require('../database/db')
const winston = require('winston');
const moment = require('moment');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
    const pool = await poolPromise;

    let result = await pool.request()
        .input("SessionId", Math.random().toString())
        .input("UserID", req.userId)  
        .execute('dbo.OnlineTest_UserTest');

    res.status(200).send(
        {
            Questions: result.recordsets[0],
            Options: result.recordsets[1]
        }
    );
});


module.exports = router;
