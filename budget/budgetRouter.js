const router = require('express').Router();
const Budget = require('./Budget.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

module.exports = router