const express = require('express');
const router = express.Router();

const Expense = require('../models/expense.js');

router.post('/', (req, res) => {

})

router.get('/', (req, res) => {
  Expense.find({}).populate('budget').populate('category')
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json({ error: err }));
})

module.exports = router;
