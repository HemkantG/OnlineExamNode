const express = require('express');
const router = express.Router();
const Joi = require('joi');
const winston = require('winston');
const addUser = require('../SPCalls/AddUser/addUser');
const generateAuthToken = require('../Utilities/TokenGeneration');

router.post('/', async (req, res) => {
    const user = req.body;
    const { error } = validate(user);

    if (error) {
        winston.error('Error occurred ', error.message);
        res.status(400).send(error.details[0].message);
        return;
    }

    const result = await addUser(user);

    if (result.recordset === undefined) {
        res.status(401).send("Invalid user")
        return;
    }

    const response = result.recordset[0];

    const token = generateAuthToken(user.UserName, response.UserID);
    res.header('x-auth-token', token);
    res.status(200).send(response);
    
});

function validate(user) {
    const schema = {
        UserName: Joi.string().required(),
        FirstName: Joi.string().required(),
        MiddleName: Joi.string().required().optional(),
        LastName: Joi.string().required(),
        Gender: Joi.string().required(),
        MaritalStatus: Joi.string().required(),
        DOB: Joi.date().required(),
        ContactNumber: Joi.string().required(),
        Email: Joi.string().email(),
        AddressLine1: Joi.string().required(),
        AddressLine2: Joi.string().required(),
        PinCode: Joi.number().required(),
        City: Joi.string().required(),
        State: Joi.string().required(),
        CollegeName: Joi.string().required(),
        StreamName: Joi.string().required(),
        RefferedBy: Joi.string().optional(),
        RefferedByContact: Joi.string().optional(),
    }
    return Joi.validate(user, schema);
}

module.exports = router;
