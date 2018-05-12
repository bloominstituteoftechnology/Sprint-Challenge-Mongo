const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");

const budgetController = require('./budget/budgetController.js');
const expenseController = require('./expense/expenseController.js');
const categoryController = require('./category/categoryController.js');

mongoose
  .connect('mongodb://localhost/budgetTracker')
  .then(() => console.log('\n... API Connected to local MongoDB ...\n'))
  // .then(() => console.log('\n... API Connected to global MongoDB atlas...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const server = express();
server.use(cors());


server.use(helmet());   
server.use(express.json());

server.use('/budget', budgetController);
server.use('/expense', expenseController);
server.use('/category', categoryController);


server.get('/', (req, res) => res.send(`API Running on port: ${port}`));

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n API up on port: ${port} `));
