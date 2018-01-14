const Budget = require('../models/budget.js')
const mongoose = require('mongoose');

exports.create = function(req, res) {
    const { title, budgetAmount } = req.body;
    const budget = new Budget({
        title,
        budgetAmount
    });
    budget.save(function() {
      }).then(function(result) {
          res.status(200).json(result);
          console.log(`budget created: ${result}`);
      }).catch(function(err) {
          res.status(500).send(err);
          console.log("An error occurred when creating budget.", err);
      });
    };

exports.showBudgets = function(req, res) {
    //const { title, budgetAmount } = req.body;
    Budget.find({})
    .then(function(budgetAmount) {
        res.status(200).json(budgetAmount);
    }).catch(function(error) {
        res.status(422).json({ message: "Error finding budgets!" });
    });
    };
