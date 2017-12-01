const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
  const { ammount, description, budget, category } = req.body;
  const newExpense = Expense({ ammount, description, budget, category });

  newExpense
    .save()
    .then(nExpense => res.status(201).json(nExpense))
    .catch(err => res.status(500).json(err));
};
const expensesGet = (req, res) => {
  Expense.find({})
    .populate('budget category')
    .exec()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(500).json(err));
};

module.exports = { expenseCreate, expensesGet };
