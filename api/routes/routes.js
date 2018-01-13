module.exports = app => {
  // Todo: Fill in your routes here
 
  const { create, showBudgets } =  require('../controllers/budgetControllers.js');
  const { createCategory, findAll } =  require('../controllers/categoryControllers.js');
  const { createExpense, showExpense } = require('../controllers/expenseControllers.js');
    // Create a new budget
  app.post('/budget', create);

  // Retrieve all categories
  app.get('/category', findAll);

  // create / store a category
  app.post('/category', createCategory);

  // Retrieve expenses
  app.get('/expense', showExpense);
};
