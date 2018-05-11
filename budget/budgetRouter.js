const express = require('express');
//const router = require("express").Router();
const Budget = require('./budget.js');
const router = express.Router();

//post to /budget
router
.post('/', function(req, res) {
    const budgetData = req.body;
    if (!budgetData.title || !budgetData.budgetAmount) {
      res.status(400).json({ errorMessage: "Please provide both title and amount."}).end();
    }
      const budget = new Budget (budgetData);
      budget
        .save()
        .then(budget => {
          res.status(201).json(budget);
        })
        .catch(err => {
          res.status(500).json({ errorMessage: "There was an error while saving the budget to the database."}).end();
        });
      }
  );

module.exports = router;