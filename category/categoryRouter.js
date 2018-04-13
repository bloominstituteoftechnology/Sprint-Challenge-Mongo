const express = require('express');

const Category = require('./Category');

const router = express.Router();

const queryFilter = require('../queryFilter/queryFilter');

router
  .route('/')
  .get((req, res) => {
    Category.find()
      .select('title')
      .then(response => {
        res.json(queryFilter(response, req.query));
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const newItem = new Category(req.body);

    if (!newItem.title) {
      res.status(422).json({
        errorMessage: 'A title is required to create a new category.',
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
    Category.findById(id)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .delete((req, res) => {
    const { id } = req.params;
    Category.findByIdAndRemove(id)
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
