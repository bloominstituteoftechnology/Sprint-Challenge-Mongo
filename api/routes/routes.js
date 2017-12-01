const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/budget').post(budgetControllers.budgetCreate);
    
  app
    .route('/catecory')
    .get(categoryControllers.categoryList)
    .post(categoryControllers.categoryCreate);
    
  app
    .route('/expense')
    .get(expenseControllers.expenseList)
    .post(expenseControllers.expenseCreate);
};