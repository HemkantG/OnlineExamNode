const { poolPromise } = require('../../database/db')

module.exports = async (answer) => {
    const pool = await poolPromise;
    return await pool.request()
        .input('UserId', answer.UserId)
        .input('QueID', answer.QueID)
        .input('AnsID', answer.AnsID)
        .input('AnswerGiven', answer.AnswerGiven)
        .input('SessionID', answer.SessionID)
        .input('TestID', 0)
        .input('Submitted', answer.Submitted)
        .execute('dbo.OnlineTest_SaveUserTestAnswers');
}   
