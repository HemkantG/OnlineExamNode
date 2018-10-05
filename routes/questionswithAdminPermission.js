const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const generateRandomNumber = require('../Utilities/RandomNumberGenerator');
const getQuestions = require('../SPCalls/GetQuestions/getQuestions')

router.get('/', [auth, admin], async (req, res) => {
    const sessionId = generateRandomNumber().toString();
    let result = await getQuestions(sessionId, req.user.userId);
    
    res.status(200).send(
        {
            Questions: result.recordsets[0],
            Options: result.recordsets[1],
            SessionId: sessionId
        }
    );
});

module.exports = router;
