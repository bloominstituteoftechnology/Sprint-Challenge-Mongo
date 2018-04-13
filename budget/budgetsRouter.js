const express = require('express');



const router = express.Router();

router
  .route('/')
  .post((req,res) => {
    const budget = new Budget(req.body);
    const { title, budgetAmount } = req.body;
    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
      .catch(err => res.status(500).json(err));
  });


module.exports = router;