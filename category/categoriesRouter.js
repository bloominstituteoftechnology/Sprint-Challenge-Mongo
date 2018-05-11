const express = require('express');
const router = express.Router();

const Category = require('./categoryModel');

router.route('/')
  .get((req, res) => {
    Category.find()
      .select('-_id -__v')
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json(err));
  })
  .post((req, res) => {
    const category = new Category(req.body);
    category.save()
      .then(category => res.status(201).json(category))
      .catch(err => res.status(500).json(err));
  })

module.exports = router;