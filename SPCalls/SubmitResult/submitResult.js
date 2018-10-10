const { poolPromise } = require('../../database/db')

module.exports = async (user, userScore) => {
    const pool = await poolPromise;
    return await pool.request()
        .input('UserId', user.userId)
        .input('UserName', user.userName)
        .input('AptitudeAccuracy', userScore ? userScore.AptitudeAccuracy : 0)
        .input('AptitudeConfidence', userScore ? userScore.AptitudeConfidence : 0)
        .input('ComputerAccuracy', userScore ? userScore.ComputerAccuracy : 0)
        .input('ComputerConfidence', userScore ? userScore.ComputerConfidence : 0)
        .input('SubmitTest', (userScore && userScore.SubmitTest) ? true : false)
        .execute('dbo.Insert_UserResultAccuracyConfidence');
}   
