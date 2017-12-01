const mongoose = require('mongoose');

const Budget = require('../models/budget');

const createBudget = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = Budget({ title, budgetAmount });
  newBudget
    .save()
    .then((createdBudget) => {
      res.status(201).json(createdBudget);
    })
    .catch((err) => {
      res.status(500);
      res.json({ errorMessage: err.message });
      return;
    });
};

module.exports = {
  createBudget
};