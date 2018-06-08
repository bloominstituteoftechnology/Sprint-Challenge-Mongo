const middleware = require('../middleware.js');
const Budget = require('./Budget.js');
const express = require('express');
const router = express.Router();

router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Budget), (req, res) => {
    req.getResult.then((budgets) => {
      if (budgets) res.json({ budgets });
      else res.status(404).json({ errorMessage: "No documents found" });
    })
  })
  .post(middleware.sanitizeMiddleware("budget"), middleware.postMiddleware(Budget), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("budget"), middleware.putMiddleware(Budget), (req, res) => {
    res.json(req.putResult);
  })
  .delete(middleware.deleteMiddleware(Budget), (req, res) => {
    res.json(req.deleteResult);
  });

module.exports = router;
