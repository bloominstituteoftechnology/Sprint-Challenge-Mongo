const express = require('express');

const Category = require('./CategorySchema');

const router = express.Router();

router.post('/', (req, res) => {
  const category = new Category(req.body);
  category
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved category!' });
    })
    .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  Category.find({})
    .select('title')
    .then(categories => res.send(categories))
    .catch(err => res.send(404).json(err));
});

module.exports = router;
