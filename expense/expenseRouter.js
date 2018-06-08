const router = require('express').Router();
const mongoose = require('mongoose');
const expenseModel = require('./expenseModel.js');

router
  .route('/')
  .post((req, res) => {
    if (req.body.amount && req.body.description && req.body.budget && req.body.category) {
      const expense = new expenseModel(req.body);
      expense.save().then(newExp => {
	res.status(200).json(newExp);
      });
    } else {
      res.status(400).json({ error: 'Please enter amount, description, budget, and category.' });
}
})

  .get((req, res) => {
    expenseModel.find()
      .populate('budget')
      .populate('category')
      .then(expenses => {
	res.status(200).json(expenses);
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error retrieving the data.' });
      });
  });

module.exports = router;
