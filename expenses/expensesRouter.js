const router = require('express').Router();
const Expense = require('./Expense.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

module.exports = router