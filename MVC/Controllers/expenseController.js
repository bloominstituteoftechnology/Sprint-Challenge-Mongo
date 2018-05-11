const express = require('express');

const Expense = require('../Models/expenseModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Expense.find()
    .populate('category')
    .populate('budget')
    .then(response => {
      res.json(response);
    })
})

router.post ('/', (req, res) => {
  const expense = new Expense(req.body);
  expense.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(400).json({error: 'error, bad request did you fill out all required fields?'})
    })
})

module.exports = router;
