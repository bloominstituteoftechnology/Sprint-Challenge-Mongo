const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const budgetRouter = require('./budget/budgetRouter.js')
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

// Connect to mongo
mongoose
.connect('mongodb://localhost/budgettrackdb')
.then(mongo => {
  console.log('Connected')
})
.catch(err => {
  console.log('Not Connected')
});

const server = express();

// Middleware
server.use(express.json())
server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);
server.use('/expenses', expenseRouter);


// add your server code

// GET for initial page
server.get('/', (req, res) => {
  res.send('Server is up and running')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
