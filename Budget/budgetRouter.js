const express = require('express');
const Budget = require('./budget');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('working');
  res.status(200).json({ status: 'Your Budget shit is connected' });
});

module.exports = router;
