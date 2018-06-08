const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  })

const server = express();  

const budgetController = require('./Budgets/budgetsController');
const categoryController = require('./Categories/categoryController');

server.use(express.json());
server.use('/budgets', budgetController); 
server.use('/categories', categoryController); 

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

