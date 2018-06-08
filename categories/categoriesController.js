const express = require('express');

const Category = require('./categoriesModel.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Category.find() 
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  })