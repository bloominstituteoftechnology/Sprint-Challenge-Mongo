const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('\n=== connected to mongo ===\n'))
  .catch(err => console.log('error connecting to mongo'));

const budgetController = require('./budget/budgetController.js');
const expenseController = require('./expense/expenseController.js');
const categoryController = require('./category/categoryController.js');

// add your server code
const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetController);
server.use('/api/expense', expenseController);
server.use('/api/category', categoryController);

server.get('/', function(req, res) {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
