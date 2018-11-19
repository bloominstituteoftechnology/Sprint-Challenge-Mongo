const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

// add your server code

const budgetRouter = require ('./budget/budgetRouter.js');
const categoryRouter = require ('./category/categoryRouter.js');
const expenseRouter = require ('./expense/expenseRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.use('/api/budgets', budgetRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/categories', categoryRouter);

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbBudget',{}, err => {
  if (err) console.log(err);
  console.log('Mongoose connected us to our DB');
});


server.listen(port, () => {
  console.log(`\n=== API successfully connected to MongoDB - running on http://localhost:${port} ===\n`);

});
