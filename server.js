const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const budgetRouter = require('./budget/budgetRouter.js');
//const expenseRouter = require('./expense/expenseRouter.js');
//const categoryRouter = require('./category/categoryRouter.js');

const server = express();

// add your server code
server.use(helmet());
server.use(express.json());

server.use('./api/budgets', budgetRouter);
//server.use('./api/expenses', expenseRouter);
//server.use('./api/categories', categoryRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
