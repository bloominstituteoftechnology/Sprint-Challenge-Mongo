const express = require('express');

const Category = require('../Models/categoryModel');

const router = express.Router();

router.post('/', (req, res) => {
  const cat = new Category(req.body);

  cat.save()
    .then(cat => {
      res.status(200).send(cat);
    })
    .catch(err => {
      res.status(400).send({ msg: 'There was an error saving that category', error: err });
    });
});

router.get('/', (req, res) => {
  Category.find()
    .select('title')
    .then(cats => {
      res.status(200).send(cats);
    })
    .catch(err => {
      res.status(400).send({ msg: 'There was an error fetching those categories', error: err });
    });
});

module.exports = router;