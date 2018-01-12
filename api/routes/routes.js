module.exports = app => {
  // Todo: Fill in your routes here
  const budget =  require('../controllers/expenseController.js');
  const category =  require('../controllers/categoryControllers.js');
  const expense = require('../controllers/expenseControllerr.js');
    // Create a new budget
  app.post('/budget', budget.create);

  // Retrieve all categories
  app.get('/category', category.findAll);

  // create / store a category
  app.post('/category', category.create);

  // Retrieve expenses
  app.get('/expense', expense.findOne);
};
