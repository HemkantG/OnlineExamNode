const sql = require('mssql')
const config = require('config');
const winston = require('winston');

const poolPromise = new sql.ConnectionPool(config.get('dbConfig'))
    .connect()
    .then(pool => {
        winston.info('Connected to database successfully.')
        return pool
    })
    .catch(err => winston.error('Database Connection Failed!', err))

module.exports = {
    sql, poolPromise
}