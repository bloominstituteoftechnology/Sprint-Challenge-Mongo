const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

//End Points
router
  .route('/')
  .get((req, res) => {
    Category
      .find()
      .select('-_id title')
      .then(foundCategories => 
        res.json(foundCategories)
      )
      .catch(err => 
        res.status(500).json(err)
      )
  })
  .post((req, res) => {
    const category = req.body;
    const newCategory = new Category(category);
    newCategory
      .save()
      .then(saveCategory => 
        res.status(201).json(saveCategory)
      )
      .catch(err => 
        res.status(422).json({ error: err })
      )
  })


module.exports = router;