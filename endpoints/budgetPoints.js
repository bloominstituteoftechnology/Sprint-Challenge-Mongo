const router = require('express').Router();
const Budget = require('../models/budgetModel.js');
const Expense = require('../models/expenseModel.js');

router
  .route('/')
  .get((req, res) => {
    //==>
    Budget.find(req.query)
      .then(budget => res.json(budget))
      .catch(err => res.status(500).json({ error: err.message }));
  })
  .post((req, res) => {
    // Data Validation
    const { title, budgetAmount } = req.body;
    if (!title || !budgetAmount) {
      res.status(400).json({ error: "Fields 'title' and 'budgetAmount' are required."});
      return;
    }
    if (typeof title !== "string" || typeof budgetAmount !== "number") {
      res.status(422).json({ error:" Field 'title' must be type 'string'. Field 'budgetAmount' must be type 'number'."});
      return;
    }
    //==>
    Budget.create({ title, budgetAmount })
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  });

// Trying to do an aggregate, but I don't have the syntax down yet.
router
  .route('/:_id')
  .get((req, res) => {
    const { _id } = req.params;
    //==>
    Expense.aggregate([
      { $match: { budget: _id }},
      { $group : {
        _id: "$budget",
        sum: { $sum: "$amount" }
      }}
    ])
      .then(expenses => res.json(expenses))
      .catch(err => res.status(500).json({ error: err.message }));
  })

module.exports = router;
/*
POST to '/budgets'
  Used to save a new budget to the database.

  Only worry about creating ONE budget for now.

  NOTE We only want to create a budget, no need to write a getter or even update the budget total directly. When we call for data to see how much is left in our budget, we'll write a separate endpoint that aggregates that information for us. We want to keep our budget total 'pure' and unaffected by our queries.
*/
