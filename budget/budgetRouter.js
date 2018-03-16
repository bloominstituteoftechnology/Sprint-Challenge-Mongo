const express = require('express');
const Budget = require('./Budget.js');
const budgetRouter = express.Router();

budgetRouter.post('/', (req, res) => {
  const info = req.body;
  const budget = new Budget(info);

  budget
    .save()
    .then(saveBud => {
      res
        .status(200)
        .json(saveBud);
    })
    .catch(err => {
      res
        .status(500)
        .json({ MESSAGE: 'Budget saving error', error: err });
    });
});

module.exports = budgetRouter;
