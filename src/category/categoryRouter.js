const express = require('express');

const Category = require('./CategoryModel.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { title } = req.body;
  if (title) {
    const category = new Category(req.body);
    category
      .save()
      .then((category) =>
        res.status(200).json({ success: 'Category was successfully added.' })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ error: 'There was a problem adding the category.' })
      );
  } else res.status(400).json({ error: 'Please provide the category title.' });
});

router.get('/', (req, res) => {
  Category.find()
    .select('title')
    .then((categories) => res.status(200).json(categories))
    .catch((err) => res.status(500).json({ err: err.message }));
});

module.exports = router;
