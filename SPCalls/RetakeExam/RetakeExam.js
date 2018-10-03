const { poolPromise } = require('../../database/db')

module.exports = async (userName, password) => {
    const pool = await poolPromise;    
    return pool.request()
        .input('AdminUserName','admin')
        .input('AdminPassword',password)
        .input('TestUserName',userName)
        .execute('dbo.Sp_Retake_Exam');
}