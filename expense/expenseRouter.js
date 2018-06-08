const express = require('express');
const Expense = require('./Expense.js');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .populate('budget', 'title -_id')
      .populate('category', 'title -_id')
      .then(expenses => {
	res.status(200).json(expenses);
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error retrieving the data.' });
      });
  })

  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });
    if (!req.body.amount || !req.body.description) {
       res.status(400).json({ error: 'Please enter amount and description.' });
       
    } else {
     newExpense.save()
	 .then(newExp => {
	   res.status(200).json({ newExp });
         })
	.catch(err => {
	  res.status(500).json({ error: 'There was an error saving to the database.' });
	});
    }
  });



module.exports = router;
