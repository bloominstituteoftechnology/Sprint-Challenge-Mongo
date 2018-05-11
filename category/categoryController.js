const express = require('express');
const Category = require('./categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send("Category router is functional.")
  })

module.exports = router;