const express = require('express');
const Expense = require('./Expense.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Working...")
});

module.exports = router;
