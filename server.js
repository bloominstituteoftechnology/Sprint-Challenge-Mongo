const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// add your server code
const budgetRouter = require('./budget/budgetRouter');
// const expenseRouter = require('./expense/expenseRouter');
//const categoryRouter = require('./category/categoryRouter');

mongoose
  .connect('mongodb://localhost/Budgetstracker')
  .then(connect => console.log('\n====Connected to DB ====\n'))
  .catch(error => console.log('\n****Error connecting****\n'));

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/budgets', budgetRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
