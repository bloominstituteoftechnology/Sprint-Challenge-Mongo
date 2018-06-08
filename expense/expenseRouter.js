const express = require('express');
const Expense = require('./Expense.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {

    })

module.exports = router;
