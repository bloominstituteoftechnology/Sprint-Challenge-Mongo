const mongoose = require('mongoose');

const Budget = require('../models/budget');

const STATUS_USER_ERROR = 422;

const budgetCreate = (req, res) => {
  const { title, amount } = req.body;
  const newBudget = new Budget({ title, text });
  newBudget.save()
    .then((createdBudget) => {
      res.json(createdBudget);
    })
    .catch((err) => {
      res.status(STATUS_USER_ERROR).json({ errorMessage: err.message });
      return;
    });
};


module.exports = {
  budgetCreate,
};