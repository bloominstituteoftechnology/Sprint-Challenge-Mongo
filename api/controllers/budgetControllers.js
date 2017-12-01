const mongoose = require('mongoose');

const Budget = require('../models/budget');

const STATUS_USER_ERROR = 422;

const createBudget = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({ title, budgetAmount });
  newBudget.save((err, createdBudget) => {
    if (err) {
      res.status(STATUS_USER_ERROR);
      res.json(err);
      return;
    }
    res.json(createdBudget);
  });
};

module.exports = {
  createBudget,
};
