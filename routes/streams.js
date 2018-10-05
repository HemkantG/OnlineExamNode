const express = require('express');
const router = express.Router();
const getStreams = require('../SPCalls/GetStreams/getStreams')

router.get('/', async (req, res) => {
    let results = await getStreams()     
    res.status(200).send(results.recordset);
});

module.exports = router;
