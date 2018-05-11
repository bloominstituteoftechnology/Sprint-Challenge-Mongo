const express = require('express');
const mongoose = require('mongoose');

//Define routers
const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js')

const server = express();

// Connect to database
mongoose
  .connect('mongodb://localhost/budgettrackerdb')
  .then(mongo => {
    console.log('connected to database');
  })
  .catch(err => {
    console.log('Error connecting to the database', err);
  });
//Middleware
server.use(express.json());

// Use Routers
server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);
server.use('/api/category', categoryRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
