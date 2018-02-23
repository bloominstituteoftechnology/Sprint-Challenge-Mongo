const mongoose = require('mongoose');

const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);
  
  if (!title || !budgetAmount) {
    res.status(500).json({ error: "You must provide both a title and a budget amount" });
  } else {
    budget
      .save()
      .then(budget => {
        res.status(200).json(budget);
      }).catch(error => {
        res.status(500).json({ error: "Could not create a new budget" });
      })
  }
}

module.exports = budgetCreate;