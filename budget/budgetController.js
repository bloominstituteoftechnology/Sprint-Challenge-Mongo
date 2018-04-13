const router = require('express').Router();

const Budget = require('./budgetModel.js');

router.route('/').post((req, res) => {
  const budget = new Budget(req.body);

  budget
    .save()
    .then(savedBudget => {
      res.status(200).json(savedBudget);
    })
    .catch(err => console.log('err'));
});

module.exports = router;
