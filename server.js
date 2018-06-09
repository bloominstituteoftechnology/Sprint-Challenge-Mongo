const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');

const server = express();

const budgetRouter = require('./Budget/budgetRouter')
const categoryRouter = require('./Category/categoryRouter')
const expenseRouter = require('./Expense/expenseRouter')

mongoose.connect('mongodb://localhost/budget')
  .then(() => {
    console.log('Sucessfully connected to MongoDb')
  })
  .catch(() => {
    console.log('MongoDb connection failure')
  })

// add your server code
server.use(express.json())

server.use('/api/budgets', budgetRouter)
server.use('/api/categories', categoryRouter)
server.use('/api/expenses', expenseRouter)


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
