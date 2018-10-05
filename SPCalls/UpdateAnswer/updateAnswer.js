const { poolPromise } = require('../../database/db')

module.exports = async (answerData) => {
    const pool = await poolPromise;
    return await pool.request()
        .input('UserID', answerData.UserId)
        .input('QueID', answerData.QueID)
        .input('AnsID', answerData.AnsID)
        .input('answerGiven', answerData.AnswerGiven)
        .input('SessionID', answerData.SessionID)
        .input('TestID', 0)
        .input('Submitted', answerData.Submitted)
        .execute('dbo.OnlineTest_SaveUserTestAnswers');
}   
