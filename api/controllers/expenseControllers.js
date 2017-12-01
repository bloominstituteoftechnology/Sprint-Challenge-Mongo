const Expense = require('../models/expense.js');

const createExpense = (req, res) => {
  const { amount, description, budget, category } = req.body;
  const newExpense = new Expense({ amount, description, budget, category });

  newExpense.save(newExpense, (err, expense) => {
    if (err) {
      res.status(422);
      res.json({ err: 'There was an error creating an expense' });
      return;
    }
    res.json(expense);
  });
};

const getExpenses = (req, res) => {
  Expense.find({}, (err, expenses) => {
    if (err) {
      res.status(422);
      res.json({ err: 'There was an error retrieving all expenses' });
      return;
    }
    res.json(expenses);
  })
}

module.exports = {
  createExpense,
  getExpenses
}