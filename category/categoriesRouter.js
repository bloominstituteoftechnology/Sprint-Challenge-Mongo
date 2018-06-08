const express = require("express");
const Category = require("./Category");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    Category.find()
      .select({ _id: 0, title: 1 })
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({ error: err.message }));
  })
  .post((req, res) => {
    const { title } = req.body;
    if (!title) {
      res
        .status(400)
        .json({ error: "Please provide a title for your category." });
    } else {
      const newCategory = new Category({ title });
      newCategory
        .save()
        .then(category => res.status(201).json(category))
        .catch(err => res.status(500).json({ error: err.message }));
    }
  });

module.exports = router;
