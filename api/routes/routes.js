module.exports = app => {
  // Todo: Fill in your routes here
  const budgetMethods = require('../controllers/budgetControllers.js');
  const expenseMethods = require ('../controllers/expenseController');
  const categoryMethods = require ( '../controllers/categoryController.');


  app.route('/budget')
  .post(budgetMethods.budgetCreate);

  app.route('/category')
  .post(categoryMethods.createCategory)
  .get(categoryMethods.returnCategories)
  
  app.route('/expense')
  .post(expenseMethods.postExpense)
  .get(expenseMethods.getExpense)

};
