const { poolPromise } = require('../../database/db')

module.exports = async (userId, status) => {
    const pool = await poolPromise;
    return pool.request()
        .input('UserId', userId)
        .input('RetestRequestStatus', status)
        .execute('dbo.Request_Retest');
}