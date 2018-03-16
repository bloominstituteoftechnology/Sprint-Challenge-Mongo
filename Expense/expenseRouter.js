const express = require('express');
const Expense = require('./expense');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'Your Expense shit is connected' });
});

module.exports = router;
