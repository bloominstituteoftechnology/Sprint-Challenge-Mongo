const express = require('express');
//const router = require("express").Router();
const Category = require('./category.js');
const router = express.Router();

//post to /category
router
.post('/', function(req, res) {
    const categoryData = req.body;
    if (!categoryData.title) {
      res.status(400).json({ errorMessage: "Please provide the title of the type of category."}).end();
    }
      const category = new Category (categoryData);
      category
        .save()
        .then(category => {
          res.status(201).json(category);
        })
        .catch(err => {
          res.status(500).json({ errorMessage: "There was an error while saving the category to the database."}).end();
        });
      }
  );

module.exports = router;