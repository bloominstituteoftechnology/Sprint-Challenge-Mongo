const middleware = require('../middleware.js');
const Budget = require('./Budget.js');
const express = require('express');
const router = express.Router();

router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Budget), (req, res) => {
    req.getResult.then((budgets) => {
      res.json({ budgets });
    })
  })
  .post(middleware.sanitizeMiddleware("budget"), middleware.postMiddleware(Budget), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("budget"), middleware.putMiddleware(Budget), (req, res) => {
    res.json(req.putResult);
  })

module.exports = router;
