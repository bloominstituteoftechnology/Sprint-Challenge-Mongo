const middleware = require('../middleware.js');
const Expense = require('./Expense.js');
const express = require('express');
const router = express.Router();



router
  .route('/')
  .get(middleware.getMiddleware(Expense), (req, res) => {
    req.getResult.then((expenses) => {
      res.json({ expenses });
    })
  })

module.exports = router;
