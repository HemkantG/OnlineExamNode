const { poolPromise } = require('../../database/db')

module.exports = async () => {
    const pool = await poolPromise;    
    return pool.request()
        .execute('dbo.Retest_Candidates');
}