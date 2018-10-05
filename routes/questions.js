const express = require('express');
const router = express.Router();
const { poolPromise } = require('../database/db')
const auth = require('../middleware/auth');
const generateRandomNumber = require('../Utilities/RandomNumberGenerator');

router.get('/', auth, async (req, res) => {
    const pool = await poolPromise;
    const sessionId = generateRandomNumber().toString();
    let result = await pool.request()
        .input("SessionId", sessionId)
        .input("UserID", req.user.userId)
        .execute('dbo.OnlineTest_UserTest');

    res.status(200).send(
        {
            Questions: result.recordsets[0],
            Options: result.recordsets[1],
            SessionId: sessionId
        }
    );
});


module.exports = router;
