const router = require('express').Router();

const categoryModel = require('./categoryModel');

const category = require('./categoryModel');

// api/category
router
  .route('/')
    .post((req, res) => {
      const category = new categoryModel(req.body);

      category
        .save()
        .then(savedCategory => {
          res.status(201).json(savedCategory);
        })
        .catch(err => {
          res.status(500).json(err);
        });
  });

  module.exports = router;
