const { poolPromise } = require('../../database/db')

module.exports = async (user) => {
    const pool = await poolPromise;
    return pool.request()
        .input('UserName', user.UserName)
        .input('Password', user.Password)
        .execute('dbo.Check_Admin_Credentials');
}