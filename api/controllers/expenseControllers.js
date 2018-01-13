const Expense = require('../models/expense.js');
const Budget = require('../models/budget.js');
const mongoose = require('mongoose');

exports.createExpense = function(req, res) {
    const { amount, description, budget, category } = req.body;
    
    let expense = new Expense({
        amount,
        description,
        budget,
        category
    });
    expense.save(function() {
        }).then(function(result) {
            res.status(200).json(result);
            console.log(`expense created: ${result}`);
        }).catch(function(err) {
            res.status(500).send(err);
            console.log("An error occurred when creating expense.", err);
        });
};

exports.showExpense = function(req,res) {
    expense.find(      
    ).populate({ path: 'budget', select: 'title' })
    .then(function(expenses) {
        res.status(200).json(expenses);
    }).catch(function(error) {
        res.status(422).send({ message: "Error!" });
    });
};