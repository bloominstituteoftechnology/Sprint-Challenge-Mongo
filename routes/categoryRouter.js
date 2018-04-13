const express = require('express');

const Category = require('../modules/categoryModule');

const router = express.Router();

router.get('/', (req, res) => {
  Category.find()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.post('/', (req, res) => {
  const category = new Category(req.body);
  category
    .save()
    .then(response => {
      res.status(200).json({ success: 'saved category!' });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

module.exports = router;
