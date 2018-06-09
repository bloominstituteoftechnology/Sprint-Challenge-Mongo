const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router.get('/', (req, res) => {
   Expense.find()
    .then(res => {
        res.status(200).json(res)
    }) 
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;