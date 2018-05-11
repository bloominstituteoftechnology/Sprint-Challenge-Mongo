const router = require('express').Router();
const Expense = require('./expenseModel');

router.get('/', function get(req, res) {
    Expense.find()
    // .populate('budget', 'title budgetAmount')
    // .populate('category', 'title ')
     .then(expenses =>
        res.status(200).json(expenses))
    //  .catch(err =>
    //     res.status(500).json({errorMessage: 'Cant Mang.'}));
    });


router.post('/', function post(req, res) {
    const expenseData = req.body;
    const expense = new Expense (expenseData);
    expense
      .save()
      .then(expense => {
        res.status(201).json(expense);
      })
      .catch(err => res.status(500).json({errorMessage: 'Cant Mang.'}));
    });

module.exports = router;