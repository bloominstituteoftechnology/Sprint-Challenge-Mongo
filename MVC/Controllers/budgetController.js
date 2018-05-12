const express = require('express');

const Budget = require('../Models/budgetModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Budget.find()
    .then(response => {
      res.json(response);
    })
})
router.post ('/', (req, res) => {
  const budget = new Budget(req.body);
  budget.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(400).json({error: 'error, bad request did you fill out all required fields?'})
    })
})
module.exports = router;
