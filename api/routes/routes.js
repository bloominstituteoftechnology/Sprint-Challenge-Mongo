const budgetController = require('../controllers/budgetControllers.js')
const categoryController = require('../controllers/categoryControllers.js')
const expenseController = require('../controllers/expenseControllers.js')
module.exports = app => {
  // Todo: Fill in your routes here
  app.get('/', (req, res) => {
    res.status(200).send('<h1>Hello</h1>');
  });

  app.post('/budget', (req, res) => {
    return budgetCreate(req,res);
  });
  // app.route('/budget').post(budgetController.budgetCreate);

  app.post('/categoryCreate', (req, res) => {
    return categoryCreate(req, res);
  });

  app.get(('/allcategorys'), (req, res) => {
    return allCategorys(req, res);
  });

  app.post(('/expense'), (req, res) => {
    return expenseCreate(req, res);
  });

  app.get(('/expense'), (req,res) => {
    return allExpenses(req, res);
  })
};
