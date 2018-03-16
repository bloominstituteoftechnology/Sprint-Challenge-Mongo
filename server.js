const express = require('express'); // remember to install your npm packages
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const server = express();

server.use(bodyParser.json());
// add your server code
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);
server.use('/api/category', categoryRouter);

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(connect => {
    console.log('API Server Connected');
  })
  .catch(error => {
    console.error('Db connection failed');
  });

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
