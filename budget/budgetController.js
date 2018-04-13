const router = require('express').Router();
const Budget = require('./budgetModel.js');

// /api/budgets
router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const budget = new Budget(req.body);

    budget
      .save()
      .then(savedBear => {
        // change the saved bear
        res.status(201).json(savedBudget);
      })
      .catch(err => res.status(500).json(err));
  });

router
  .route('/:id')
  .get((req, res) => {
    Budget.findById(req.params.id)
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    Budget.findByIdAndRemove(id)
      .then(response => {
        if (response === null) {
          res.status(404).json({ message: 'not found' });
        } else {
          res.status(200).json(response);
        }
      })
      .catch(err => {
        if (err.name === 'CastError') {
          res.status(400).json({
            message: 'The id provided is invalid, please check and try again.',
          });
        } else {
          res
            .status(500)
            .json({ errorMessage: 'The budget could not be removed', err });
        }
      });
  })
  .put((req, res) => {
    // const changes = { ...req.body, updatedOn:new Date() }

    Budget.findByIdAndUpdate(req.params.id, req.body)
      .then(response => {
        if (response === null) {
          res.status(404).json({ message: 'not found' });
        } else {
          res.status(200).json(response);
        }
      })
      .catch(err => {
        if (err.name === 'CastError') {
          res.status(400).json({
            message: 'The id provided is invalid, please check and try again.',
          });
        } else {
          res
            .status(500)
            .json({ errorMessage: 'The budget could not be removed', err });
        }
      });
  });

module.exports = router;