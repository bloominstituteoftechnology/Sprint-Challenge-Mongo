const express = require('express');

const Category = require('../Models/CategoryModel.js');

const categoryRouter = express.Router();

categoryRouter.get('/', (req, res) => {
  Category.find({})
    .select('title')
    .then(categories => {
      res.status(200).json({ Categories: categories });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error displaying Categories' });
    })
});

categoryRouter.post('/', (req, res) => {
  const { title } = req.body;

  const category = new Category({ title });
  category.save()
    .then(savedCategory => {
      res.status(200).json({ CategorySaved: savedCategory });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error saving new Category'});
    })
});

module.exports = categoryRouter;