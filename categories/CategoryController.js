const express = require('express');

const Category = require('./CategoryModel');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category
      .find().select('title -_id')
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).json(error));
  })
  .post((req, res) => {
    const category = new Category(req.body);

    Category
      .create(category)
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).json(error));
  })

module.exports = router;
