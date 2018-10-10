const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const generateAuthToken = require('../Utilities/TokenGeneration');
const isLoginSuccess = require('../SPCalls/CheckAdminCredentials/checkAdminCredentials')

router.post('/', async (req, res) => {
    const user = req.body;
    let result = await isLoginSuccess(user);
    if (result.recordset[0].Success === 0) {
        res.status(403).send("Invalid username or password!");
        return;
    }

    const token = generateAuthToken(user.UserName, 0, true);
    res.header('x-auth-token', token);
    res.status(200).send({ LoginStatus: 'Success' });

});

module.exports = router;
