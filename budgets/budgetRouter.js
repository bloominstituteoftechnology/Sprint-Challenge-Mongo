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

module.exports = router;
