module.exports = app => {
  // Todo: Fill in your routes here
  const createBudget = require('../controllers/budgetControllers')

  app.post('/budget', createBudget);

};
