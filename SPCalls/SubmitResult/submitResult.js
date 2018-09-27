const { poolPromise } = require('../../database/db')

module.exports = async (user, userScore) => {
    const pool = await poolPromise;
    return await pool.request()
        .input('UserId', user.userId)
        .input('UserName', user.userName)
        .input('AptitudeAccuracy', userScore.AptitudeAccuracy)
        .input('AptitudeConfidence', userScore.AptitudeConfidence)
        .input('ComputerAccuracy', userScore.ComputerAccuracy)
        .input('ComputerConfidence', userScore.ComputerConfidence)
        .execute('dbo.Insert_UserResultAccuracyConfidence');
}   
