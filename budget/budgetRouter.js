const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

// Used to save a new budget to the database.
// Only worry about creating ONE budget for now.
// NOTE We only want to create a budget,
//  no need to write a getter 
//  or even update the budget total directly. 

router.route('/').post((req, res) =>{
    const budgetData = req.body;
    const budget = new Budget(budgetData);
    budget
          .save()
          .then(budget => {
              res.status(201).json(budgets);
          })
          .catch(err => {
              res.status(500).json(err)
          });
})

//When we call for data to see how much is left in our budget,
//   we'll write a separate endpoint that 
//   aggregates that information for us. 
//   We want to keep our budget total 'pure' 
//   and unaffected by our queries.

router.route('')

module.exports = router;