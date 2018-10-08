const { poolPromise } = require('../../database/db')

module.exports = async (user, userScore) => {
    const pool = await poolPromise;
    console.log(userScore.SubmitTest);
    return await pool.request()
        .input('UserId', user.userId)
        .input('UserName', user.userName)
        .input('AptitudeAccuracy', userScore.AptitudeAccuracy)
        .input('AptitudeConfidence', userScore.AptitudeConfidence)
        .input('ComputerAccuracy', userScore.ComputerAccuracy)
        .input('ComputerConfidence', userScore.ComputerConfidence)
        .input('SubmitTest', userScore.SubmitTest != undefined)
        .execute('dbo.Insert_UserResultAccuracyConfidence');
}   
