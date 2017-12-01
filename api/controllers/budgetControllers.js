const Budget = require('../models/budget');

const STATUS_USER_ERROR = 422;

const budgetCreate = (req, res) => {
    const { title, budgetAmount } = req.body
    const newBudget = new Budget({ title, budgetAmount});
    newBudget
      .save()
      .then((budget) => {
          res.json(budget)
      })
      .catch((err) => {
          res.status(STATUS_USER_ERROR).json(err)
          return;
      });
};

module.exports = {
    budgetCreate,
};