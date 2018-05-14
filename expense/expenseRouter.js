const router = require('express').Router();
const Expense = require('./expenseModel');

router.get('/', function get(req, res) {
    Expense.find()
    .populate('budget', 'title budgetAmount -_id')
    .populate('category', 'title -_id')
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

    router.delete('/:id', (req, res) => {
        const { id } = req.params;

        Expense.findByIdAndRemove(id)
          .then(expense => {
            if (expense) {
              res.status(204).end();
            } else {
              res.status(404).json({ msg: 'whaaa?' });
            }
          })
          .catch(err => res.status(500).json(err));
      });


module.exports = router;