const express = require('express');

const Category = require('../Models/categoryModel');

const router = express.Router();

router.post('/', (req, res) => {
  const cat = new Category(req.body);

  cat.save()
    .then(res => {
      res.status(200).send(res);
    })
    .catch(err => {
      res.status(400).send('There was an error saving that budget', err);
    });
});

router.get('/', (req, res) => {
  Category.find()
    .select('title')
    .then(cats => {
      res.status(200).send(cats);
    })
    .catch(err => {
      res.status(400).send('Error fetching categories');
    });
});

module.exports = router;