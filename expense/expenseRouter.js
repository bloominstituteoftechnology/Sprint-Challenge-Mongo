const express = require('express')

const Expense = require('./Expense.js')

const router = express.Router()

// add endpoints here
router.get('/', (req, res) => res.json('Hey, this endpoint works!'))

module.exports = router
