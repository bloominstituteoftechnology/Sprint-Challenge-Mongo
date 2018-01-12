const mongoose = require('mongoose');

const Budget = require('../models/budget');

const createBudget = (req, res) => {
  
  const budget = new Budget(req.body);

  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating budget', err });
    });
};

module.exports = {
  createBudget
};
