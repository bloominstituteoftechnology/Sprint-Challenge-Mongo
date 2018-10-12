const express = require('express');

const Budget = require('./Budget.js');

const router = express.Router();

router
  .route('/')
  .post((req, res) => {
    const { title, budgetAmount } = req.body;
    if (!title || !budgetAmount) {
        res.status(400).json({ errorMessage: "Please provide firstName, lastName and age for the friend." })
        return;
    }
    const newBudget = new Budget({ title, budgetAmount });
    newBudget.save() // filter, .select(), .where(), .sort()
      .then(result => res.json(result))
      .catch(err => res.status(500).json({ error: err.message }));
  });

module.exports = router;