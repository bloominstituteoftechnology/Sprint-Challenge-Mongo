const express = require('express');
const Router = express.Router();

const Budget = require('../models/BudgetModel');

Router.route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .post((req, res) => {
    Budget.create(req.body)
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = Router;
