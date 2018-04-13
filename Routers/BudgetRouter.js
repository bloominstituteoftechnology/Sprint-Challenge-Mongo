const router = require("express").Router();

const Budget = require("../Models/BudgetModel");

router
  .route("/")
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
    console.log('body', req.body);
    const budget = new Budget(req.body);

    console.log('budget', budget);

    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
     .catch(err => res.status(500).json(err));
  });

module.exports = router;