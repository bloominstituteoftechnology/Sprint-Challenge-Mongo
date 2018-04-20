const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

router.post('/', (req, res) => {
  const budget = new Budget(req.body);
  budget
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved budget!' });
    })
    .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  Budget.find({})
    .then(budgets => res.send(budgets))
    .catch(err => res.send(404).json(err));
});
module.exports = router;
