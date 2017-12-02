const Budget = require('../models/budget');

const SERVER_STATUS_ERROR = 500;
const USER_STATUS_ERROR = 422;

const budgetCreate = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget
    .save()
    .then(budget => {
      res.json(budget);
    })
    .catch(err => {
      res.status(SERVER_STATUS_ERROR).json({ error: err.message });
    });
};

module.exports = {
  budgetCreate
};