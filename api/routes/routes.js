module.exports = app => {
 
  //abstract the methods used for each route and bind them to the routes
  const { create, showBudgets } =  require('../controllers/budgetControllers.js');
  const { createCategory, findAll } =  require('../controllers/categoryControllers.js');
  const { createExpense, showExpense } = require('../controllers/expenseControllers.js');
  
  // show/create a new budget 
  //we will get ride of the .get method later once all routes are working
  app.get('/budget', showBudgets);
  app.post('/budget', create);

  // Retrieve all categories
  // create a category 
  app.get('/category', findAll);
  app.post('/category', createCategory);

  // Retrieve/create expenses
  app.get('/expense', showExpense);
  app.post('/expense', createExpense);

};
