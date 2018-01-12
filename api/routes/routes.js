const { budgetCreate, budgetSummary } = require('../controllers/budgetControllers');
const { categoryCreate, categoryRetrieve } = require('../controllers/categoryControllers');
const { expenseCreate, expenseRetreive } = require('../controllers/expenseControllers');


module.exports = app => {
  // Todo: Fill in your routes here
  app.route('/budget')
    .post(budgetCreate)
    .get(budgetSummary);

  // app.route('/expense')
  //   .post(expenseCreate)
  //   .get(expenseRetreive);

  app.route('/category')
    .post(categoryCreate)
    .get(categoryRetrieve);
};
