const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

// add endpoints here
router.get('/', (req, res) => {
  Category.find().select('title -_id')
    .then(categories => {
      console.log(categories);
      res.status(200).json(categories)
    })
    .catch(err => {
      res.status(404).json({ errorMessage:  "Categories not found." });
    })
})

router.post('/', (req, res) => {
  const categoryData = req.body;

  const category = new Category(categoryData);
  category
    .save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        res.status(400).json({ errorMessage: "Please provide a title for your category." })
      } else {
        res.status(500).json({ errorMessage: "There was an error while creating your new category." });
      }
    })
})

module.exports = router;
