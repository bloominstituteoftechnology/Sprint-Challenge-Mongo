const router = require('express').Router();

const Category = require('./categoryModel');

// /api/category
router
  .route('/')
  .get((req, res) => {
    Category.find({})
      .then(category => {
        res.status(200).json(category);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const category = new Category(req.body);

    category
      .save()
      .then(newCategory => {
        res.status(201).json(newCategory);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

router.route('/:id').get((req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.status(200).json(category);
    })
    .catch(err => {
      res.status(500).json(error);
    });
});

module.exports = router;
