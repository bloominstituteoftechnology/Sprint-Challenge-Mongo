const router = require("express").Router();

const Category = require("../Models/CategoryModel");

router
  .route("/")
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
      .then(savedCategory => {
        res.status(201).json(savedCategory);
      })
      .catch(err => res.status(500).json(err));
  });

module.exports = router;