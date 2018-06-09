const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category.find()
      .then( category => {
        res.status(200).json(category);
      })
      .catch( err => {
        res.status(500).json({error: 'Error retrieving info from database', err})
      })
  })

router
  .post((req, res) => {
    const categoryData = req.body;

    if (!categoryData) {
      return res.status(400).json({error: 'Please provide title'})
    }
    const category = new Category(categoryData);
    category.save()
      .then( budget => {
        res.status(201).json(budget);
      })
      .catch( err => {
        res.status(500).json({error: 'Error posting to database', err});
      })
  });

module.exports = router;
