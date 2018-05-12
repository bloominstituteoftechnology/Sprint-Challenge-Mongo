const router = require('express').Router();
const categoryModel = require('../models/categoryModel');

router
  .route('/')
  .get((req, res) => {
    categoryModel
      .find()
      .select('title')
      .then(categories => {
        res.status(200).status(categories);
      })
      .catch(err => {
        res
          .status(500)
          .status({ error: 'The categories could not be retrieved' });
      });
  })

  .post((req, res) => {
    const newCat = new category(req.body);
    newCat
      .save()
      .then(newCategory => {
        res.status(200).json(newCategory);
      })
      .catch(err => {
        res.status(500).json({ error: 'Category could not be created' });
      });
  });

module.exports = router;
