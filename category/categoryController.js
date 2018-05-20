const router = require('express').Router();

const Category = require('./categoryModel');

router.route('/').get((req, res) => {
  Category
      .find()
      .select('title')
      .then(gory => res.status(200).json(gory))
      .catch(err => {
          res.status(500).json(err);
      });
})


router.route('/').post((req, res) => {
  const category = new Category(req.body);

  category
    .save()
    .then(savedCategory => {
      res.status(200).json(savedCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;