const { poolPromise } = require('../../database/db')
const { getTheDate } = require('../../helpers/helpers');


module.exports = async (filterCriteria) => {
    console.log("FilterCriteria :", filterCriteria);
    const startDate = filterCriteria.StartDate ? getTheDate(filterCriteria.StartDate) : getTheDate(new Date() - 1);
    const endDate = filterCriteria.EndDate ? getTheDate(filterCriteria.EndDate) : getTheDate(new Date());

    const pool = await poolPromise;
    return pool.request()
        .input('startDate', startDate)
        .input('endDate', endDate)
        .input('testSubmited', filterCriteria.testSubmited)
        .input('resultStatus', filterCriteria.resultStatus)
        .execute('dbo.OnlineTestReport_AccuracyConfidence');
}