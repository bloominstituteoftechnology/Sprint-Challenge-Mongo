const middleware = require('../middleware.js');
const Category = require('./Category.js');
const express = require('express');
const router = express.Router();



router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Category), (req, res) => {
    req.getResult.then((categories) => {
      res.json({ categories });
    })
  })
  .post(middleware.sanitizeMiddleware("category"), middleware.postMiddleware(Category), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("category"), middleware.putMiddleware(Category), (req, res) => {
    res.json(req.putResult);
  })

module.exports = router;
