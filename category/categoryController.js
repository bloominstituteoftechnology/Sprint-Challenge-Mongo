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
        res.status(500).json({ message: 'Error requesting Categories' });
      });
  })

  .post((req, res) => {
    const newCategory = new Category(req.body);
    newCategory
      .save()
      .then(savedCategory => {
        res.status(200).json(savedCategory);
      })
      .catch(error => {
        res.status(500).json({ message: 'Error posting Category' });
      });
  });

module.exports = router;
