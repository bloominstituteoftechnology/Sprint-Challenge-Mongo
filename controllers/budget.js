const express = require('express');

const Budget = require('../models/budget');

const router = express.Router();

router.post('/', (req, res) => {
  const info = req.body;
  if (info) {
    budget = new Budget(info);
    budget
      .save()
      .then(newBudget => {
        res.status(201).send(newBudget);
      })
      .catch(err => {
        res.status(500).send({ error: err });
      });
  }
});

module.exports = router;
