const router = require('express').Router();

const ExpenseModel = require('./expenseModel');
const db_thrown_error = require(`./db_thrown_error`);

// add endpoints here
router
  .route(`/`)
  .get((req, res) => {
    let query = ExpenseModel.find({});

    query
      .then(expenses => {
        if (expenses.length === 0) {
          res.status(404).json({ error: `No expenses found!` });
        } else {
          res.status(200).json(expenses);
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
      res.status(400).json({ error: `Please enter an expense title` });
      return;
    }

    if (req.body.description === undefined) {
      res.status(400).json({ error: `Please enter an expense description` });
      return;
    }

    if (req.body.budget_id === undefined) {
      res.status(400).json({ error: `Please enter an expense budget id` });
      return;
    }

    if (req.body.category_id === undefined) {
      res.status(400).json({ error: `Please enter an expense category id` });
      return;
    }

    // create a Expense Model
    const expense = new ExpenseModel(req.body);

    expense
      .save()
      .then(savedExpense => {
        res.status(201).json(savedExpense);
      })
      .catch(err => {
        const error = db_thrown_error({ error: err, type: `POST` });
        res.status(error.status).json(error.errorMessage);
      });
  });

module.exports = router;
