const express = require('express');

const Category = require('./Category.model.js');

const myFactory = require('../myTools/routerFactory');

const router = express.Router();

routerFactory = myFactory.routerFactory(router, Category);
routerFactory.setPopulate('expenses');
routerFactory.setProjection({ title: 1, _id: 0 });

module.exports = router;
