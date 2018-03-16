const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db.js');
//bring in all routers
const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');


const server = express();

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
