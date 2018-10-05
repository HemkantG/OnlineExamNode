const { poolPromise } = require('../../database/db')

module.exports = async (sessionId, userId) => {
    const pool = await poolPromise;
    return pool.request()
        .input("SessionId", sessionId)
        .input("UserID", userId)
        .execute('dbo.OnlineTest_UserTest');
}