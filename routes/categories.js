const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router
  .post('/', (req, res) => {
    const { title } = req.body;
    const newCategory = new Category({ title });

    newCategory.save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })
  .get('/', (req, res) => {
    Category.find()
      .select({
        title: 1,
        _id: 0
      })
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  })

module.exports = router;