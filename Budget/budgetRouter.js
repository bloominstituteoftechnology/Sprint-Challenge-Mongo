const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./Budget');

const router = express.Router();

router.route('/').post((req, res) => {
  const newBudget = new Budget(req.body);

  newBudget
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
