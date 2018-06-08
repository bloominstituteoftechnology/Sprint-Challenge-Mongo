const express = require('express');
const mongoose = require('mongoose');
const server = express();

// add your server code
const budgetController = require('./budgetTracker/budgetController');
const categoryController = require('./budgetTracker/categoryController');
const expenseController = require('./budgetTracker/expenseController');

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'runnig' }); 
});

server.use('/api/budgets', budgetController);
server.use('/api/category', categoryController);
server.use('/api/expense', expenseController);

const port = process.env.PORT || 5000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbbudgetTracker', {}, err => {
  if (err) console.log(err);
  console.log('Mongoose connected us to our DB');
});


server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
