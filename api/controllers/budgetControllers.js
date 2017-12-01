const Budget = require('../models/budget');
const Expense = require('../models/expense');

const budgetCreate = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save(newBudget, (err, savedBudget) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedBudget);
  });
};

module.exports = {
  budgetCreate
};
