const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();

const budgetController = require('./budget/budgetController.js');
const categoryController = require('./category/categoryController.js')
const expenseController = require('./expense/expenseController.js')

server.use(helmet());
server.use(cors());
server.use(express.json());


server.use('/api/budget', budgetController);
server.use('/api/expense', expenseController);
server.use('/api/category', categoryController);



// add your server code

mongoose.connect('mongodb://localhost/dbBudgetTracker', {}, (err => {
  err ? console.log(err) : console.log('Mongoose is connected to our Database')
}))

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
