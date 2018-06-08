const router = require('express').Router();
const Budget = require('../models/budgetModel.js');

router
  .route('/')
  .post((req, res) => {
    Budget.create(req.body)
      .then(budget => {
        res.json(budget);
      })
      .catch(err => res.status(500).json({ error: err.message }));
  })

/*
POST to '/budgets'
  Used to save a new budget to the database.

  Only worry about creating ONE budget for now.

  NOTE We only want to create a budget, no need to write a getter or even update the budget total directly. When we call for data to see how much is left in our budget, we'll write a separate endpoint that aggregates that information for us. We want to keep our budget total 'pure' and unaffected by our queries.
*/
