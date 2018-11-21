const mongoose = require('mongoose');
const Budget = require('../models/Budget.js');

const createBudget = (req, res) => {
  const { title, amount } = req.body;
  const newBudget = new Budget({ title, amount });
  newBudget.save((err, savedBudget) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    res.json(savedBudget);
  });
};

module.exports = { createBudget };