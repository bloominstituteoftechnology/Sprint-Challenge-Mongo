const router = require("express").Router();

const Category = require("../Models/categoryModel.js");

router.post("/", (req, res, next) => {
  const category = new Category(req.body);
  category
    .save()
    .then(newCategory => {
      res.status(201).json(newCategory);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/", (req, res, next) => {
  Category.find({})
    .select("-__v -_id")
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
