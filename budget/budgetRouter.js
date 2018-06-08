const router = require('express').Router();
const budgetModel = require('./budgetModel.js');

router
  .route('/').post((req, res) => {
    const newBudget = new budgetModel(req.body);
    newBudget.save()
      .then(savedBudget => {
	res.status(201).json(savedBudget);
      })
      .catch(err => {
	res.status(500).json({ error: 'The data could not be posted to budget'});
      });
  });

module.exports = router;
