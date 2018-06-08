const router = require('express').Router();
const Category = require('./Category.js');

router
  .route('/')
  .get((req, res) => {
    Category.find(req.query, {
        "_id": 0,
        "title": 1
      })
      .then(categories => res.json(categories))
      .catch(err => res.status(500).json({
        error: err.message
      }))
  })
  .post((req, res) => {
    const {
      title
    } = req.body;
    Category.create({
        title
      })
      .then(category => res.status(201).json(category))
      .catch(err => res.status(500).json({
        error: err.message
      }))
  });

module.exports = router;