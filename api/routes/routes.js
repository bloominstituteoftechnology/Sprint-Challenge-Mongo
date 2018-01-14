module.exports = app => {
  // Todo: Fill in your routes here
  //abstract the methods used for each route and bind them to the routes
  const { create, showBudgets } =  require('../controllers/budgetControllers.js');
  const { createCategory, findAll } =  require('../controllers/categoryControllers.js');
  const { createExpense, showExpense } = require('../controllers/expenseControllers.js');
    // show/create a new budget
  
  app.get('/budget', showBudgets);
  app.post('/budget', create);

  // Retrieve all categories
  app.get('/category', findAll);

  // create / store a category
  app.post('/category', createCategory);

  // Retrieve expenses
  app.get('/expense', showExpense);
  app.post('/expense', createExpense);
};
