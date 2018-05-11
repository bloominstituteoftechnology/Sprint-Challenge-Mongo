const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const budgetCont = require('./budget/budgetController.js');
const categoryCont = require('./category/categoryController.js');
const expenseCont = require('./expense/expenseController.js');

mongoose
  .connect('mongodb://localhost/savemoneys')
  .then(() => console.log(' > API dancing with Database'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n\n', err));

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/budget', budgetCont);
server.use('/api/category', categoryCont);
server.use('/api/expense', expenseCont);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(` > Server swerving around planet ${port}`);
});
