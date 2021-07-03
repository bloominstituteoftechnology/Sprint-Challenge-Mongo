const express = require('express');

const Category = require('./Category.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

routerFactory = myFactory.routerFactory(router, Category);

// Define Projection for the Model
routerFactory.setProjection({ title: 1, _id: 0 });

// Set Paths to be populated
routerFactory.setPopulate('expenses');

module.exports = router;
