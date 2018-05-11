const express = require('express');
const mongoose = require('mongoose');
const Category = require('./Category.js');

const router = express.Router();

router.post('/', (req, res) => {
  const { title } = req.body;
  if (title) {
    const posted = new Category({title: title})
    posted.save()
      .then(result => res.status(201).json(result))
      .catch(err => res.status(500).json(err));
  } else {
    res.status(400).json({msg: 'title field required'});
  }
});

router.get('/', (req, res) => {
  Category.find().select('title -_id')
    .then(categories => res.status(200).json(categories))
    .catch(err => res.status(500).json(err));
})

module.exports = router;