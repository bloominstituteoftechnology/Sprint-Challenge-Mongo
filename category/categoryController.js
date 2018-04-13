const express = require('express');
const Category = require('./categoryModel');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category.find({})
      .select('title')
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

  .post((req, res) => {
    const newCategory = newCategory(req.body);
    newCategory
      .save()
      .then(saveCategory => {
        res.status(200).json(saveCategory);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;
