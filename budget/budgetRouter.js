const express = require('express');
const Budget = require('./Budget.js');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(budget => {
	res.status(200).json(budget);
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error accessing the budget' });
      });
  })

  .post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    if (!req.body.title) {
      res.status(400).json({ error: 'Please enter a title and budget amount.'});
    } else {
      newBudget.save()
      .then(savedBudget => {
	res.status(201).json({ savedBudget });
      })
      .catch(err => {
	res.status(500).json({ error: 'There was an error posting to the database.'});
      });
    }
  });

module.exports = router;
