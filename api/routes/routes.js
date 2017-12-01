const budgetControllers = require('../controllers/budgetControllers');

module.exports = app => {
  // Todo: Fill in your routes here
  app
    .route('/budget')
    .post(budgetControllers.budgetCreate);
};
