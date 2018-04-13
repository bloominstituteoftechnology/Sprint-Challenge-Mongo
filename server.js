const express = require('express'); // remember to install your npm packages
const bodyParser = require('body-parser');
const morgan = require('morgan');

const server = express();

// add your server code
const db = require('./data/db.js');
const categoriesRouter = require('./categories/CategoryController');
const budgetsRouter = require('./budgets/BudgetController');
const expensesRouter = require('./expenses/ExpenseController');

db
  .connectTo('budgets')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(bodyParser());
server.use(morgan());
server.use('/api/categories', categoriesRouter);
server.use('/api/budgets', budgetsRouter);
server.use('/api/expenses', expensesRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
