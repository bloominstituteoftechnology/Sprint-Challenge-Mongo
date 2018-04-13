const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const budgetsRouter = require('./budgets/budgetsRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');

const server = express();

server.use(helmet());
server.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost/budget')
  .then(conn => console.log('Connected to BudgetDB!'))
  .catch(err => console.log('Failed to connect to database...'));

server.use('/budget', budgetsRouter);
server.use('/expenses', expensesRouter);
server.use('/category', categoriesRouter);

server.get('/', (request, response) => response.send('API running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
