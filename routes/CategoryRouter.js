const express = require('express');
const Category = require('../CategoryModel.js');

const router = express.Router();


router.get('/', function (req, res) {
  Category.find()
    .select('title')
    .then(categories => res.status(200).json(categories))
    .catch(error =>
      res.status(500).json({ message: 'Could not get category list', error })
    );
});

router.post('/', function (req, res) {
  Category.create(req.body)
    .then(budget => res.status(201).json(budget))
    .catch(error =>
      res.status(500).json({ message: 'Could not create budget', error })
    );
});

module.export = router;