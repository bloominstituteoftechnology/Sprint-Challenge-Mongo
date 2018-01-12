const budgetCreate = require('../controllers/budgetControllers.js');
const {categoryCreate, categoryList } = require('../controllers/categoryControllers.js');
const { expenseCreate, expenseList } = require('../controllers/expenseControllers.js');

module.exports = server => {
  // Todo: Fill in your routes here
 server.post('/budget', (req, res) => budgetCreate());

 server.post('/category', (req, res) => categoryCreate());

 server.get('/category', (req, res) => categoryList());

 server.post('/expense', (req, res) => expenseCreate());

 server.get('/expense', (req,res) => expenseList());
}
