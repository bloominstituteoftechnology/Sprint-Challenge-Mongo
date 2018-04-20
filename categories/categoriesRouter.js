const express = require('express');

const Category = require('./Category');

const router = express.Router();

router.route('/').get((req, res) => {
  Category.find({})
    .select({ title: 1, _id: 0 })
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.route('/').post((req, res) => {
  const category = new Category(req.body);

  if (!req.body.title) {
    res.status(400).json({ errorMessage: 'Title field required (string).' });
    return;
  }

  category
    .save()
    .then(savedCategory => {
      res.status(201).json(savedCategory);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage:
          'There was an error while saving the category to the database.',
      });
    });
});

module.exports = router;
