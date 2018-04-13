const router = require('express').Router();

const Category = require('./category');

router
  .route('/')
  .get()
  .post();

module.exports = router;
