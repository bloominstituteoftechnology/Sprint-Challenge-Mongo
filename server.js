const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');


const server = express();
const budgetRouter = require('./budget/budgetRouter.js')
const categoryRouter = require('./category/categoryRouter.js')
const expenseRouter = require('./expense/expenseRouter.js')

server.use(helmet());
server.use(express.json());

server.get('/', function(req, res) {
  res.status(200).json({ api: 'running' });
});

server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/budgets', budgetRouter);

const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/appBudgetDb', {}, err => {
  if(err) console.log(err);
  console.log('Mongoose connected to our DB')
} )

server.get('/', (req, res) => res.send('API Running...'));



server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
