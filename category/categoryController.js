const express = require('express');
const Category = require('./categoryModel');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    Category
      .find()
      .select('-_id title')
      .then(categories => res.status(200).json(categories))
      .catch(err => res.status(500).json({ error: "Cannot fetch any categories at this time." }))
  })

  .post((req, res) => {
    const { title } = req.body;
    if (!title || title === "") { res.status(400).send("A title is required to create a category.") }

    const category = new Category({ title });
    category
      .save()
      .then(savedCategory => res.status(201).json(savedCategory))
      .catch(err => res.status(500).json({ error: "There was an issue saving your category." }))
  })

module.exports = router;