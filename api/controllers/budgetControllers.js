const mongoose = require('mongoose');
const Budget = require('../models/budget');

module.exports = budgetCreate = (req, res) => {
  const { title, budgetAmount } = req.body;
  const newBudget = new Budget({title, budgetAmount})

  newBudget
    .save()
    .then((createBudget) => {
      res.status(200).json(createBudget)
    })
    .catch((err) => {
      res.status(422).json(err)
    })
  // const newBudget = req.body;
  // const budget = new Budget(newBudget);
  // budget.save()
}