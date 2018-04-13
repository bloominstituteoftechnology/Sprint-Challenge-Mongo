const router = require('express').Router();

const Expense = require('./expense');

router
  .route('/')
  .get()
  .post();

module.exports = router;
