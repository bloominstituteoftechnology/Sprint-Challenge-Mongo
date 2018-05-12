const router = require('express').Router();

const budgetModel = require('../models/budgetModel');

router.route('/').post((req, res) => {
  const newBudget = new budgetModel(req.body);
  newBudget
    .save()
    .then(savedBudget => {
      res.status(201).json(savedBudget);
    })
    .catch(err => {
      res.status(500).json({ error: 'The budget could not be created.' });
    });
});

module.exports = router;
