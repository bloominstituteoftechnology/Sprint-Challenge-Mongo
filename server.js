const express = require('express');

const Budget = require('./routes/budgetRouter.js');
const Category = require('./routes/categoryRouter.js');
const Expense = require('./routes/expenseRouter.js');

const server = express();

server.use('/budget', Budget);
server.use('/category', Category);
server.use('/expense', Expense);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
