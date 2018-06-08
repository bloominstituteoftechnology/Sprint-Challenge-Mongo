const middleware = require('../middleware.js');
const Category = require('./Category.js');
const express = require('express');
const router = express.Router();



router
  .route('/')
  .get(middleware.getMiddleware(Category), (req, res) => {
    req.getResult.then((categories) => {
      res.json({ categories });
    })
  })

module.exports = router;
