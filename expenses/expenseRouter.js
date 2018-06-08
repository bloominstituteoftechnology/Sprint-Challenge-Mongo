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
        if (expenses) res.json({ expenses });
        else res.status(404).json({ errorMessage: "No documents found" });
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
