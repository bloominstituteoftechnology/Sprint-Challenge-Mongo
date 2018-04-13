const router = require('express').Router();
const Category = require('./category');

router
  .route('/')
  .get((req, res) => {
    Category.find({})
      .select('title -_id')
      .then(categories => res.status(200).json(categories))
      .catch(err => res.status(500).json(err));
  })
  .post((req, res) => {
    const category = new Category(req.body);
    category
      .save()
      .then(newCategory => res.status(201).json(newCategory))
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
