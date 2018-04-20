const router = require('express').Router();

const BudgetModel = require('./budgetModel');
const db_thrown_error = require(`./db_thrown_error`);

// add endpoints here
router
  .route(`/`)
  .get((req, res) => {
    let query = BudgetModel.find({});

    query
      .then(budgets => {
        if (budgets.length === 0) {
          res.status(404).json({ error: `No budgets found!` });
        } else {
          res.status(200).json(budgets);
        }
      })
      .catch(err => {
        const error = db_thrown_error({ error: err, type: `GET` });
        res.status(error.status).json(error.errorMessage);
      });
  })
  .post((req, res) => {
    // do some error checks
    if (req.body.title === undefined) {
      res.status(400).json({ error: `Please enter a budget title` });
      return;
    }

    if (req.body.budgetAmount === undefined) {
      res.status(400).json({ error: `Please enter a budget amount` });
      return;
    }

    // create a budget Model
    const budget = new BudgetModel(req.body);

    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
      .catch(err => {
        const error = db_thrown_error({ error: err, type: `POST` });
        res.status(error.status).json(error.errorMessage);
      });
  });

module.exports = router;
