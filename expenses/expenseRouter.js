const middleware = require('../middleware.js');
const Expense = require('./Expense.js');
const express = require('express');
const router = express.Router();



router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Expense), (req, res) => {
    req.getResult
      .populate('budget')
      .populate('category')
      .then((expenses) => {
      res.json({ expenses });
    })
  })
  .post(middleware.sanitizeMiddleware("expense"), middleware.postMiddleware(Expense), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("expense"), middleware.putMiddleware(Expense), (req, res) => {
    res.json(req.putResult);
  })
  .delete(middleware.deleteMiddleware(Expense), (req, res) => {
    res.json(req.deleteResult);
  });

module.exports = router;
