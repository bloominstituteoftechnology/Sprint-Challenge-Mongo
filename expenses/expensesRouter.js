const router = require('express').Router();

const Expense = require('./ExpenseModel.js');

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({}).populate('budget category', {
      _id: 0,
      title: 1,
      budgetAmount: 1,
    });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
