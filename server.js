const mongoose = require('mongoose');
const helmet = require('helmet')
const express = require('express');
// remember to install your npm packages

const budgetRouter = require('./budget/budgetRouter');
const expenseRouter = require('./expense/expenseRouter');
const categoryRouter = require('./category/categoryRouter')

const server = express();

// add your server code
mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {console.log('\n... API Connected to Database ...\n')})
  .catch(err => {console.log("error connecting to Database", err);});

  server.use(helmet());
  server.use(express.json());

  server.use('/api/budgets', budgetRouter)
  server.use('/api/expenses', expenseRouter)
  server.use('/api/categories', categoryRouter)

  server.get('/', (req, res) => {res.status(200).json({ api: 'RUNNING AND RUNNING'});});



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
