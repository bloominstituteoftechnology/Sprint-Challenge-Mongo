const express = require('express');
const router = express.Router();

const Category = require('./Category');

router
  .route('/')
  .post((req, res) => {
    const category = new Category(req.body);
    
    category.save()
    .then(newCategory => {
      res.status(200).json(newCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    });
  })
  .get((req, res) => {
    Category.find({}).select({ _id: 0, title: 1 })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  });
  
  module.exports = router