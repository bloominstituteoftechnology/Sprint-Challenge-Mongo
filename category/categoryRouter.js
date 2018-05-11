const router = require('express').Router();

const Category = require('./categoryModel');

router.get('/', function get(req, res) {
    Category.find()
     .then(categories=>
      res.status(200).json(categories));
    });

router.post('/', function post(req, res) {
    const categoryData = req.body;
    const category = new Category (categoryData);
    category
      .save()
      .then(category => {
        res.status(201).json(category);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;

