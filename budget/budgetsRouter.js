const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

router.route('/')
  .get(function (req, res) {
    Budget
      .find()
      .then(budget => res.json(budget))
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post(function (req, res) {
    const budgetInfo = req.body;

    const budget = new Budget(budgetInfo);

    budget
      .save()
      .then(response => {
        res.status(201).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;