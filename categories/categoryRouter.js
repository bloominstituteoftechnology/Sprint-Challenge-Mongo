const express = require('express');

const Category = require('./Categories.js');

const router = express.Router();

router
.route('/')
.get((req, res) => {
  Category.find({})
  .then(categories => {
    const titles = [];
    categories.filter(a => {
      titles.push(a.title);
    }) // Note, this is returning an array. the elements are just strings, not objects.
    res.status(200).json(titles);
  })
  .catch(err => {
    res.status(500).json(err);
  });
})
.post((req, res) => {
  const category = new Category(req.body);
  
  category
  .save()
  .then(newCategory => {
    res.status(201).json(newCategory);
  })
  .catch(err => res.status(500).json(err));
});

module.exports = router;