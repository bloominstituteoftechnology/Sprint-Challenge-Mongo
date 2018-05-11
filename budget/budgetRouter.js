const express = require('express');
const mongoose = require('mongoose');
const Budget = require('./Budget.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { title, budgetAmount } = req.body;
  if (title && budgetAmount) {
    const posted = new Budget({title: title, budgetAmount: budgetAmount})
    posted.save()
      .then(result => res.status(201).json(result))
      .catch(err => res.status(500).json(err));
  } else {
    res.status(400).json({msg: 'title and budgetAmount fields required'});
  }
})

module.exports = router;