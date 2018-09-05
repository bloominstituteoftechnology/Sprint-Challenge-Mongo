const router = require('express').Router();

const Expense = require('../database/Expense');

router
  .get('/', (req, res) => {
    Expense.find()
      .populate('budget', '-_id, title')
      .populate('category', '-_id, title')
      .exec((err, raw) => {
        if (err)
          return res.status(500).json(err);

        res.json(raw);
      });
  })

  .post('/', (req, res) => {
    const { amount, description, budget, category } = req.body;
    const expense = { amount, description, budget, category };
    
    Expense.create(expense, (err, raw) => {
      if (err)
        return res.status(500).json(err);

      res.json(raw);
    });
  });

module.exports = router;