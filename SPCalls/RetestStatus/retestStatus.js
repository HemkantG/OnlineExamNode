const { poolPromise } = require('../../database/db')

module.exports = async (userName) => {
    const pool = await poolPromise;
    return pool.request()
        .input('UserName', userName)
        .execute('dbo.Request_Retest_Status');
}