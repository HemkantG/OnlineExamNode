const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const generateRandomNumber = require('../Utilities/RandomNumberGenerator');
const getQuestions = require('../SPCalls/GetQuestions/getQuestions')
const requestRetest = require('../SPCalls/Retest/retest');
const checkRetestRequestStatus = require('../SPCalls/RetestStatus/retestStatus');
const getPerQuestionTime = require('../SPCalls/GetPerQuestionTime/getPerQuestionTime');

checkRetestStatus = async (userName) => {
    const retestStatus = await checkRetestRequestStatus(userName);
    return retestStatus.recordset ? retestStatus.recordset[0].ReTestRequested : null
}

router.get('/', auth, async (req, res) => {
    const sessionId = generateRandomNumber().toString();
    let result = await getQuestions(sessionId, req.user.userId);
    
    let perQuestionTime = await getPerQuestionTime();
    
    let retestStatus = await checkRetestStatus(req.user.userName);

    if (retestStatus && retestStatus === "Granted") {
        requestRetest(req.user.userId, 'NotRequested');
    }
    res.status(200).send(
        {
            Questions: result.recordsets[0],
            Options: result.recordsets[1],
            SessionId: sessionId,
            PerQuestionTime : perQuestionTime.recordset[0].PerQuestionTime
        }
    );
});

module.exports = router;
