const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

const queryFilter = require('../queryFilter/queryFilter');

router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(response => {
        res.json(queryFilter(response, req.query));
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const newItem = new Budget(req.body);
    newItem
      .save()
      .then(response => {
        res.json(response);
      })
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
