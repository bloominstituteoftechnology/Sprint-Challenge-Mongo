const router = require('express').Router();
const Category = require('../models/categoryModel.js');

router
  .route('/')
  .get((req, res) => {
    //==>
    Category.find(req.query, { "_id":0, "title": 1})
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({ error: err.message }))
  })
  .post((req, res) => {
    const { title } = req.body;
    //==>
    Category.create({ title })
      .then(category => res.status(201).json(category))
      .catch(err => res.status(500).json({ error: err.message }))
  });

module.exports = router;
/*
POST to '/categories'
  to create a category you should have a 'post' method that stores the category information.
  you can write a getter 'get' method that simply returns all the categories. Filter out any unuseful information here, meaning we just want the title of the categories.
  create a minimum of 4 categories so that when you create your expenses, you can assign where they go!
  example of categories could be: Food/Dining Gas/Auto Date Nights Mortgage
*/