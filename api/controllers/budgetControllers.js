const mongoose = require('mongoose');

const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const budgetInfo = req.body;
  const { title, budgetAmount } = req.body;
  const budget = new Budget(budgetInfo);


  if (!title || !budgetAmount) {
    res.status(500).json({error: 'You must provide the title and budgetAmount for your budget.'})
  } else {
    budget.save()
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(error => {
        res.status(500).json({error})
      })
  }
};


module.exports = budgetCreate