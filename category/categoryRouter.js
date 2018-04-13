const express = require('express');
const router = express.Router();

const Category = './categoryModel.js';

router.get('/', (req, res) => {
  Category.find({})
    .select('title')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json({
        errr: 'Error getting them gories'
      });
    });
});

router.post('/', (req, res) => {
  const category = new Category(req.body);
  category
    .save()
    .then(newGory => {
      res.status(200).json(newGory);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
module.exports = router;
