const middleware = require('../middleware.js');
const Budget = require('./Budget.js');
const Expense = require('../expenses/Expense.js');
const express = require('express');
const router = express.Router();

router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Budget), (req, res) => {
    req.getResult.then((budgets) => {
      if (budgets) res.json({ budgets });
      else res.status(404).json({ errorMessage: "No documents found" });
    })
  })
  .post(middleware.sanitizeMiddleware("budget"), middleware.postMiddleware(Budget), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("budget"), middleware.putMiddleware(Budget), (req, res) => {
    res.json(req.putResult);
  })
  .delete(middleware.deleteMiddleware(Budget), (req, res) => {
    res.json(req.deleteResult);
  });

  router
    .route('/:id/remaining')
    .get(middleware.getMiddleware(Budget), (req, res) => {


      req.getResult.then((budget) => {
        Expense.find()
          .where('budget').in([req.params.id])
          .then((expenses) => {
            let remaining = budget.budgetAmount;
            expenses.forEach((expense) => remaining -= expense.amount);
            res.json({ remaining })
          })
      })
    })

module.exports = router;
