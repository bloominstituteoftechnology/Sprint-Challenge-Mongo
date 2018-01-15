const Expense = require('../models/expense.js');
const Budget = require('../models/budget.js');
const App = require('../routes/routes.js');
//const ExpenseReport = require('../expenseReport.json');
const fs = require('fs');
//const mongoose = require('mongoose');

exports.createExpense = function(req, res) {
    const { amount, description, budgetId, categoryId } = req.body;
    const expense = new Expense({
        amount,
        description,
        budget: budgetId,
        category: categoryId
    });
    expense.save(function() {
        }).then(function(amount) {
            res.status(200).json(amount);
            console.log(`expense created: ${amount}`);
        }).catch(function(err) {
            res.status(500).send(err);
            console.log("An error occurred when creating expense.", err);
        });
};

exports.showExpense = function(req,res) {
    Expense.find(      
    ).populate({ path: 'Budget', select: 'budgetAmount' })
    .then(function(expenses) {
        res.status(200).json(expenses);
    }).catch(function(error) {
        res.status(422).send({ message: "Error!" });
    });
    const { id } = req.params

};