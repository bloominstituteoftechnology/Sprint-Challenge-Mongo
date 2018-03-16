const express = require('express');

const Category = require('./CategoryModel.js');

const CategoryRouter = express.Router();

//req.body is undefined again...
//No idea what I'm doing differently
//Just going to use req.query instead
CategoryRouter.post('/', (req,res) => {
    const categoryInfo = req.query;
    const newCategory = new Category(categoryInfo);
    
    newCategory
    .save()
    .then(category => {
      res.status(201).json({ Category: category });
    })
    .catch(error => {
      res.status(500).json({ Error: error });
    });
});
module.exports = CategoryRouter;