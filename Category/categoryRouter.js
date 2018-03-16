const express = require('express');
const Category = require('./category');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'Your Category shit is connected' });
});

module.exports = router;
