const express = require('express');
const Category = require('./Category');

const router = express.Router();

// POST to create a new category
router.post('/categories', (req, res) => {
    const categoryData = req.body;
    const category = new Category(categoryData);
  
    category
    .save()
    .then(category => {
      res.json(category)
    })
    .catch(err => {
      res.json(err)
    })
})
  
  // GET all of the categories
router.get('/categories', (req, res) => {
  
    Category
    .find().select('title -_id')
    .then(categories => {
      res.json(categories)
    })
    .catch(err => {
      res.json(err)
    })
})
  
module.exports = router;