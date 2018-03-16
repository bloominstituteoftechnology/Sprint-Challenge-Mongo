const express = require('express');
const Category = require('./category');

const router = express.Router();

router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ errorMessage: 'Please provide a title in the request body' });
  }
  const category = new Category(req.body);
  category.save()
    .then(newCategory => {
      res.status(201).json(newCategory);
    })
    .catch(err => {
      if (err) {
        res.status(400).json({ errorMessage: 'there was a user error', errorBody: err });
      }
      res.status(500).json({ errorMessage: 'There was an error while saving the category to the database', err});
    });
});

router.get('/', (req, res) => {
  Category.find({})
    .then(categories => {
      res.status(200).json( { categories: categories });
    })
    .catch(err => {
      res.status(500).json({ error: 'The information could not be retrieved' });
    });
});

module.exports = router;
