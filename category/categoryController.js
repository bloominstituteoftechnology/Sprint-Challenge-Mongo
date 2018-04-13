const router = require('express').Router();
const Category = require('./categoryModel');

router
  .route('/').get((req, res) => {
    Category
    .find({})
    .select('title')
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  })
  .post((req, res) => {
    const category = new Category(req.body);
    category
    .save()
    .then(saveCategory => {
      res.status(200).json(saveCategory);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  module.exports = router;