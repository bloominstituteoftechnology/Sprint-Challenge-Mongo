const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

mongoose
  .connect('mongodb://localhost/5000')
  .then(() => console.log('\n... API dancing with Database ...\n\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n\n', err));

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api/budget', budgetRouter);
// server.use('/api/category', categoryRouter);
// server.use('/api/expense', expenseRouter);

// routes will go here

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server dancing around planet ${port}`);
});
