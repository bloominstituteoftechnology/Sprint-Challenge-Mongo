const router = require('express').Router();

const Budget = require('./budgetModel');

router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const bear = new Budget(req.body);

    Budget
      .save()
      .then(savedBudget => {
        // change the save budget
        res.status(201).json(savedBudget);
      })
      .catch(err => res.status(500).json(err));
  });



module.exports = router;