const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

const expenseCreate = (req, res) => {
  const expense = req.body;
  Expense.post(expense)
    .then((expense) => {
      if (!expense) throw new Error('No expense created');
      res.status(201).json({ message: 'Expense created successfully' });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

const expenseList = (req, res) => {
  Expense.find({})
    .then((expenses) => {
      if (expenses.length === 0) throw new Error('Expenses retrieved failed');
      res.status(200).json(expenses);
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  expenseCreate,
  expenseList
};