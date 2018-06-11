const express = require('express');
const Budget = require('./Budget.js');
const router = express.Router();

router
    .route('/')
    .get(get)
    .post(post);

const msgNotExists = {
    message: "The id you provided does not exist"
}

router
    .route('/:id')
    .get((req, res) => {
        const objId = req.params.id;
        Budget.findById(objId)
            .then(budget => {
                if (budget) {
                    res.status(201).json({ budget })
                } else {
                    return res.status(404).json(msgNotExists)
                }
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "Your budget could not be retrieved, try again later." })
            })
    })
    .delete((req, res) => {
    const objId = req.params.id;
        Budget.findByIdAndDelete(objId)
        .then(deleted => {
            if (deleted) {
                res.status(201).json({ message: "You've deleted your budget! We hope it's because you're making more money", objId })
            } else {
                return res.status(404).json(msgNotExists)
            }
        })
        .catch(err => {
            res.status(500).json({
                errorMessage: "There was an error, please try again later!"
            })
        })
});

function get(req, res) {
    Budget.find().then(budgets => {
        res.status(200).json(budgets);
    })
        .catch(err => {
            res.status(500).json({ errorMessage: "The budget information could not be retrieved.", err });

        });
}


function post(req, res) {
    const budgetData = req.body;
    const budget = new Budget(budgetData);

    if (!budgetData.title || !budgetData.budgetAmount) {
        return res.status(400).json({
            errorMessage: "Please provide the title and budget amount for the budget."
        })
    }
    budget
        .save().then(budget => {
            res.status(201).json(budget)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error while saving the budget to the database" });
        });
}





module.exports = router;
