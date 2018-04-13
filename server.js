const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const budgetRouter = require('./cashTrack/budgets/budgetRouter.js');
const expenseRouter = require('./cashTrack/expenses/expenseRouter.js');
const categoryRouter = require('./cashTrack/category/categoryRouter.js');
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost/btdb')
  .then( () => console.log('\n===Connected to Mongo===\n'))
  .catch(err => console.log('error connecting to Mongo'));

const server = express();

server.use(express.json());
server.use(helmet());
server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);
server.use('/expenses', expenseRouter);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
