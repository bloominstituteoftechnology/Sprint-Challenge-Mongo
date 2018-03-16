const express = require('express');
const mongoose = require('mongoose');

const Category = require('./category');

const router = express.Router();

router.get('/', (req, res) => {
  Category.find({})
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
});

router.post('/', (req, res) => {
  const category = req.body;
  category.save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

});

module.exports = router;
