const express = require('express');
const router = express.Router();

const Expense = require('../models/expense.js');

router.post('/', (req, res) => {
  const expItem = req.body;
  const expense = new Expense(expItem);

  expense.save()
    .then(item => res.status(201).json(item))
    .catch(err => res.status(500).json({ error: err}));
});

router.get('/', (req, res) => {
  Expense.find({}).populate('budget').populate('category')
  .then(cat => res.json(cat))
  .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
