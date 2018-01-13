const Expense = require('../models/expense.js');
module.exports = exports;
exports.createExpense = function(req, res) {
    const { amount, description, budget, category } = req.body;
    if (!req.body.amount || ! req.body.description || !req.body.budget || !req.body.category) {
        res.status(400).send( { message: "Please provide all the information" });
    }
    const expense = new Expense({
        amount,
        description,
        budget,
        category
    });
    expense.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while saving expense." });
        } else {
            res.send(data);
        }
    });
};

exports.showExpense = function(req,res) {
    Expense.find(      
    ).populate({ path: 'budget', select: 'title' })
    .then(function(expenses) {
        res.status(200).json(expenses);
    }).catch(function(error) {
        res.status(422).send({ message: "Error!" });
    });
};