const router = require('express').Router();

const Budget = require('./budgetModel');

// /api/budget
router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budget => {
        res.status(200).json(budget);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const budget = new Budget(req.body);

    budget
      .save()
      .then(newBudget => {
        res.status(201).json(newBudget);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

router.route('/:id').get((req, res) => {
  Budget.findById(req.params.id)
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

module.exports = router;
