const { poolPromise } = require('../../database/db')
const { getTheDate } = require('../../helpers/helpers');


module.exports = async (filterCriteria) => {
    const startDate = filterCriteria.StartDate ? getTheDate(filterCriteria.StartDate) : getTheDate(new Date() - 1);
    const endDate = filterCriteria.EndDate ? getTheDate(filterCriteria.EndDate) : getTheDate(new Date());

    const pool = await poolPromise;
    return pool.request()
        .input('startDate', startDate)
        .input('endDate', endDate)
        .input('testSubmited', filterCriteria.TestSubmitted)
        .input('resultStatus', filterCriteria.ResultStatus)
        .execute('dbo.OnlineTestReport_AccuracyConfidence');
}