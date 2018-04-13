const express = require('express');

const Budget = require('./Budget');

const router = express.Router();

const queryFilter = require('../queryFilter/queryFilter');

router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(response => {
        res.json(queryFilter(response, req.query));
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const newItem = new Budget(req.body);

    if (!newItem.title || !newItem.budgetAmount) {
      res.status(422).json({
        errorMessage:
          'A title and a budgetAmount is required to create a new budget.',
      });
    } else {
      newItem
        .save()
        .then(response => {
          res.json(response);
        })
        .catch(err => res.status(500).json(err));
    }
  });

router
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    Budget.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    Budget.findByIdAndRemove(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .put((req, res) => {
    const { id } = req.params;
    const updateInfo = req.body;
    Budget.findByIdAndUpdate(id, updateInfo)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
