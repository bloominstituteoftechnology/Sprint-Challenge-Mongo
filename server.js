const server = require('express')();
const port = process.env.PORT || 5000;
const dbConnection = require('./dbConnection');
const budgetsRouter = require('./routes/budgets');
const categoriesRouter = require('./routes/categories');
const expensesRouter = require('./routes/expenses');

server.use(require('helmet')());
server.use(require('cors')());
server.use(require('express').json());

server.use('/budgets', budgetsRouter);
server.use('/categories', categoriesRouter);
server.use('/expenses', expensesRouter);

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
