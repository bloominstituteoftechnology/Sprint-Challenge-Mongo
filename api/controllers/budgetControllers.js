const Budget = require('../models/budget.js')
const mongoose = require('mongoose');

exports.create = function(req, res) {
    const { title, budgetAmount } = req.body;
    // if(!req.body.title || !req.body.amount) {
    //     res.status(400).send({message: "body can not be empty"});
    // };
    let budget = new Budget({
        title,
        budgetAmount
    });

    budget.save(function() {
      }).then(function(result) {
          res.status(200).json(result);
          console.log(`budget created: ${result}`);
      }).catch(function(err) {
          res.status(500).send(err);
          console.log("An error occurred when creating budget.");
      });
    };
exports.showBudgets = function(req, res) {
    budget.find({})
    .then(function(budgets) {
        res.status(200).json(budgets);
    }).catch(function(error) {
        res.status(422).json({ message: "Error!" });
    });
    };
