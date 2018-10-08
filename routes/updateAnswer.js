const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const upadateAnswer = require('../SPCalls/UpdateAnswer/updateAnswer')
const submitResult = require('../SPCalls/SubmitResult/submitResult')

router.post('/', auth, async (req, res) => {
    const answerData = req.body.AnswerData;
    const partialResult = req.body.PartialResult;
    (await upadateAnswer(answerData));
    (await submitResult(req.user,partialResult));
    res.status(200).send(); 
});

module.exports = router;
