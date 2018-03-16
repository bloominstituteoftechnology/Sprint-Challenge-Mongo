const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/BudgetRouter.js');
const expenseRouter = require('./expense/ExpenseRouter.js');
const categoryRouter = require('./category/CategoryRouter.js');

const server = express();

server.use(helmet());
server.use(bodyParser.json);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
