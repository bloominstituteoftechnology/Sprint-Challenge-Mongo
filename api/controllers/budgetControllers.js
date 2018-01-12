const mongoose = require('mongoose');
const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const budget = req.body;
  const newBudget = new Budget(budget);
  newBudget.save()
    .then((budget) => {
      if (!budget) throw new Error('No budget created');
      res.status(201).json({ message: 'Budget created successfully' });
    })
    .catch((error) => {
      res.status(422).json({ error: error.message });
    });
};

module.exports = {
  budgetCreate
};