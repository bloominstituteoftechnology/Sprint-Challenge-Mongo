const express = require('express');
const Expense = require('./Expense');

const router = express.Router();

// GET expenses
router.get('/expenses', (req, res) => {

    Expense
    .find().populate('budget category')
    .then(expense => {
      res.json(expense)
    })
    .catch(err => {
      res.json(err)
    }) 
})
  
  // POST expenses
router.post('/expenses', (req, res) => {
    const expenseData = req.body;
    const expense = new Expense(expenseData)
  
    expense
    .save()
    .then(expense => {
      res.json(expense)
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;