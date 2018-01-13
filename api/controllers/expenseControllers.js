const mongoose = require('mongoose');
const Expense = require('../models/expense');
const Budget = require('../models/budget')
const ObjectId = mongoose.Schema.Types.ObjectId;
const expenseCreate = (req, res) => {
    const {amount, description, budgetId, categoryId} = req.body;
    let expense = new Expense({amount, description, budget: budgetId, category:categoryId});
    expense
        .save()
        .then((results) => {
            res.status(200).json(results);
            console.log('user has created category', results)
        })
        .catch((err) => {
            res.status(500).send(err)
            console.log('problem create new category', err)
        })
}


const budgetSummary = (req, res) => {
    const budgetId = req.params.id;
    Budget
        .findById(budgetId)
        .then( (budgetResult) => {             
            
            const budget = budgetResult.budgetAmount;
            Expense
                .aggregate({
                        $group:
                        {
                            _id: budgetId,
                            totalExpenses: { $sum: "$amount" },
                        }
                    })
                .then( results => {
                    const expense = results[0].totalExpenses;
                    res.status(200).json({budget, expense, balance: budget - expense})
                })
                .catch( err => {
                    res.status(500).send(err);
                })
        })
        .catch( err => {
            res.status(500).send(err)
            console.log('problem with budget summary', err)
        })
    
}

const expenseAggregation = (req, res) => {
    const aggregatedBy = req.query.aggregatedBy;
    switch(aggregatedBy){
        case 'category':
        default:
            categoryAggregate(req, res);
    }
}

const categoryAggregate = (req, res) => {
    
    Expense
    .aggregate(
        [
          {
            $group:
              {
                _id: { category:"$category"},
                total: { $sum: "$amount" }
              }
          }
        ]
     )
     .sort({total:-1})
     .then( results => {
         res.status(200).json(results);
     })
     .catch( err => {
         res.status(500).send(err);
     })
}

module.exports = { expenseCreate, budgetSummary, expenseAggregation} ;