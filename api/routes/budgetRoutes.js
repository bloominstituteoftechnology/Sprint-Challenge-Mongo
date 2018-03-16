const express = require('express');
const budgetController = require('../controllers/budgetController');
let budgetRouter = express.Router();

budgetRouter.route('/').get(budgetController.getBudget);

module.exports = budgetRouter;