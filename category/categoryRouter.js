const express = require('express');
const Category = require('./category');

const router = express.Router();

router.post('/category', (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({ title });
  newCategory
    .save()
    .then(category => {
      res.status(201).json(category);
    })
    .catch(errorSavingCategory => {
      res.status(500).json(errorSavingCategory);
    });
});

module.exports = router;
