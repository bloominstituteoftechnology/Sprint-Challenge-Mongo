const express = require('express');

const Category = require('../Models/categoryModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Category.find()
    .then(response => {
      res.json(response);
    })
})
router.post ('/', (req, res) => {
  const category = new Category(req.body);
  category.save()
    .then(response => {
      res.status(201).json(response);
    })
    .catch(err => {
      res.status(400).json({error: 'error, bad request did you fill out all required fields?'})
    })
})

module.exports = router;
