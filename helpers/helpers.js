const moment = require('moment');

getTheDate = (timestamp, format) => {
    let formatDate = format ? format : 'MM-DD-YYYY';
    return moment(timestamp).format(formatDate);
}

module.exports = { getTheDate }