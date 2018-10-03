const express = require('express');
const router = express.Router();
const { poolPromise } = require('../database/db')
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');


router.get('/', [auth, admin], async (req, res) => {
    const pool = await poolPromise;

    let result = await pool.request()
        .input("SessionId", Math.random().toString())
        .input("UserID", req.user.userId)
        .execute('dbo.OnlineTest_UserTest');

    res.status(200).send(
        {
            Questions: result.recordsets[0],
            Options: result.recordsets[1]
        }
    );
});


module.exports = router;
