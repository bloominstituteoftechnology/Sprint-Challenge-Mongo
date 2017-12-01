const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
  const { ammount, description, budget, category } = req.body;
  const newExpense = Expense({ ammount, description, budget, category });

  newExpense
    .save()
    .then((createdExpense) => {
      res.status(201).json(createdExpense)
    })
    .catch((err) => {
      res.status(500);
      res.json({ errorMessage: err.message });
      return;
    });
}

const getExpense = (req, res) => {
  Expense.find({})
    .populate('budget category')
    .exec()
    .then((expenses) => {
      res.json(expenses);
    })
    .catch((err) => {
      res.status(500);
      res.json({ errorMessage: err.message });
      return;
    });
};

module.exports = {
  expenseCreate,
  getExpense
};