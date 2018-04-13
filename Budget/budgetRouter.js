const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./Budget');

const router = express.Router();

router.route('/').post((req, res) => {
  if (req.body.title && req.body.budgetAmount) {
    const newBudget = new Budget(req.body);

    newBudget
      .save()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  } else {
    res
      .status(404)
      .json({ message: 'User error: not all required fields completed.' });
  }
});

module.exports = router;
