const express = require('express'); // remember to install your npm packages
const budgetRouter = require('./Budget/budgetRouter')
const CategoryRouter = require('./Category/categoryRouter')
const expenseRouter = require('./Expense/expenseRouter')
const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to database', err);
  });

const server = express();

// add your server code
server.use(express.json())

server.use('/budgets',budgetRouter)
server.use('/categories',CategoryRouter)
server.use('/expenses',expenseRouter)

server.get('/', (req, res) => res.send('API Running...'));


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
