const router = require('express').Router();
const mongoose = require('mongoose');

const expenseModel = require('../models/expenseModel');

/**
 * @param if statement checking for each component of request
 * @param amount is a number that represents total expense
 * @param description = string that tells you what the expense was
 * @param budget = ref to whatever budget it affects
 * @param category = ref to category of expense
 */
router
  .route('/')
  .post((req, res) => {
    if (
      req.body.amount &&
      req.body.description &&
      req.body.budget &&
      req.body.category
    ) {
      const exp = new expenseModel(req.body);
      exp.save().then(newExp => {
        res.status(200).json(newExp);
      });
    } else {
      res.status(400).json({
        message: 'Enter an amount, description, budget, and category.'
      });
    }
  })

  .get((req, res) => {
    expenseModel
      .find()
      .populate('budget')
      .populate('category')
      .then(expenses => {
        res.status(200).json(expenses);
        // console.log('budget category');
      })
      .catch(err => {
        res.status(500).json({ message: 'Error fetching expenses' });
      });
  });

module.exports = router;
