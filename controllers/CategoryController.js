const express = require('express');
const Category = require('../models/CategoryModel.js');

const categoryRouter = express.Router();

categoryRouter.post('/', (req, res) => {
  const categoryInfo = req.body;
  const category = new Category(categoryInfo);

  category
    .save()
    .then(newCategory => {
      res.status(200).json(newCategory);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Error creating new Category', error: err });
    });
});

module.exports = categoryRouter;
