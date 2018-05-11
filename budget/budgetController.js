const express = require('express');
const Budget = require('./budgetModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send("Budget router is functional.")
  })

module.exports = router;