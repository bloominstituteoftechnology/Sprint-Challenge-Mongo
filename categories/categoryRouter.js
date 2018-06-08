const middleware = require('../middleware.js');
const Category = require('./Category.js');
const express = require('express');
const router = express.Router();



router
  .route(['/', '/:id'])
  .get(middleware.getMiddleware(Category), (req, res) => {
    req.getResult.then((categories) => {
      if (categories) res.json({ categories });
      else res.status(404).json({ errorMessage: "No documents found" });
    })
  })
  .post(middleware.sanitizeMiddleware("category"), middleware.postMiddleware(Category), (req, res) => {
    res.json(req.postResult);
  })
  .put(middleware.sanitizeMiddleware("category"), middleware.putMiddleware(Category), (req, res) => {
    res.json(req.putResult);
  })
  .delete(middleware.deleteMiddleware(Category), (req, res) => {
    res.json(req.deleteResult);
  });

module.exports = router;
