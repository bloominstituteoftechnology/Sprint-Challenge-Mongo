const Budget = require('../models/budget');
module.exports = budgetCreate = (req, res) => {
    const {title, budgetAmount} = req.body;
    const budget = new Budget()
    budget.save({title, budgetAmount}) 
      .then(
          (results) => {
            //do something here are the results
            res.status(200).json(results)
            console.log('user has created budget');
          }
        )
      .catch((err) => {
          //do something theres be an error
          res.status(500).json(err)
          console.log('problem creating new budget');
      })
      module.exports = budget: expensesAggregate = (req, res) => {
        const {title, budgetAmount} = req.body;
        const budget = new Budget()
        budget.save({title, budgetAmount}) 
          .then(
              (results) => {
                //do something here are the results
                res.status(200).json(results)
                console.log('user has created expenses in budget');
              }
            )
          .catch((err) => {
              //do something theres be an error
              res.status(500).json(err)
              console.log('problem creating expenses Aggregate');