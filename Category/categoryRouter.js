const express = require('express');

const Category = require('./Categories');

const router = express.Router();


router
  .route('/')
  .get((req, res) => {

  Category.find()
    .select({_id: 0, title: 1})
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'An error occured while attempting to find categories', error: err });
    });
})

  .post((req, res) => {
  const category = new Category(req.body);

  category.save()
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'An error occured while attempting to save category', error: err });
    });
});


module.exports = router;
