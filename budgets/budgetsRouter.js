const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

router.route('/').get((req, res) => {
  Budget.find({})
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
