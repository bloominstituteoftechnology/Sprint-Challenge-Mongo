const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();
const budgetRouter = require('./budgetRouter.js');
const categoryRouter = require('./categoryRouter.js');
const expenseRouter = require('./expenseRouter.js');

// add your server code
server.use(express.json())
server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
