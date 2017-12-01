const mongoose = require('mongoose');

const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({title, budgetAmount});
    newBudget.save(newBudget, (err, newBudget) => {
        if (err) {
          res.status(500)
          res.json({errorMessage: err.message});
          return;
          }
          res.json(newBudget);
      });
    };

    module.exports = {
        budgetCreate
    }