const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.get("/", (req, res) => {
  Category.find({}, {title: 1, _id: 0})
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post("/", (req, res) => {
  const { title } = req.body;
  let category = new Category({title});
  category.save()
    .then(savedCategory => {
      res.json(savedCategory);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;