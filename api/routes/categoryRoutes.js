const express = require('express');
const categoryController = require('../controllers/categoryController');
let categoryRouter = express.Router();

// EndPoint: /api/category/

categoryRouter.route('/').get(categoryController.getCategories);

categoryRouter.route('/').post(categoryController.insertCategory);

module.exports = categoryRouter;