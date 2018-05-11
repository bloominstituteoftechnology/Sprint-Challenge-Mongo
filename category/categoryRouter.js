const express = require('express');

const Category = require('./Category.js');

const router = express.Router();

// to create a category you should 
// have a 'post' method 
// that stores the category information.

router.route('/').post((req, res) =>{
    const categoryData = req.body;
    const category = new Category(categoryData);
    Category
          .save()
          .then(category => {
              res.status(201).json(categories);
          })
          .catch(err => {
              res.status(500).json(err)
          });
});

router.get('/', function(req, res) {
    Category.find()
    .select('category-titles')
    .then(categories => res.status(200).json(categories))
    .catch(err => {
        res.status(500).json(err);
    });
});

// you can write a getter 'get' method that 
// simply returns all the categories. 
// Filter out any unuseful information here, 
// meaning we just want the title of the categories.
// create a minimum of 4 categories so that 
// when you create your expenses, you can assign where they go

module.exports = router;