const Budget = require('../models/budget.js')

exports.create = function(req, res) {
    const { title, amount } = req.body;
    if(!req.body.title || !req.body.amount) {
        res.status(400).send({message: "body can not be empty"});
    }
    const budget = new Budget({
        title,
        amount
    });

    Budget.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the budget."});
        } else {
            res.send(data);
        }
    });
};

exports.showBudgets = function(req, res) {
    Budget.find({})
    .then(function(budgets) {
        res.status(200).json(budgets);
    }).catch(function(error) {
        res.status(422).json({ message: "Error!" });
    });
};