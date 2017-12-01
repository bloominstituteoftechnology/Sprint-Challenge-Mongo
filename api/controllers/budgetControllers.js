const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const { title, budgetAmount } =  req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save(newBudget, (err, savedbudget) => {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedbudget);
  })
};

module.exports = {
  budgetCreate,
};