const budgetCreate = require('../controllers/budgetControllers.js');
const categoryCreate = require('../controllers/categoryControllers.js');
const categoryFind = require('../controllers/categoryControllers.js');
const expenseCreate = require('../controllers/expenseControllers.js');

module.exports.routes = app => {
  // Todo: Fill in your routes here
  app.post('/budget', budgetCreate);
  app.post('/category', categoryCreate);
  app.get('/category', categoryFind);
  app.post('/expense', expenseCreate);
};
