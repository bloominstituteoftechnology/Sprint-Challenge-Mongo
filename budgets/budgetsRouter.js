const router = require('express').Router();

const Budget = require('./BudgetModel.js');

router.post('/', async (req, res) => {
  try {
    const budget = new Budget(req.body);
    const savedBudget = await budget.save();
    res.status(201).json(savedBudget);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
