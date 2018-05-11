const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

// create a new db file
const db = require('./db');
//routers below
const budgetRouter = require('./budgets/budgetRouter'); // budget router 
const expenseRouter = require('./expenses/expenseRouter'); // expense router
const categoryRouter = require('./categories/categoryRouter'); // category router 

const server = express();

// add your server code

db
.connectTo('budgetTracker')
.then(() => {
  console.log('\n...Successful connection! Good job!...\n')
})
.catch(err => {
  console.log('\n...ERROR: UhOh! Connection failed...\n')
});

server.use(helmet());
server.use(express.json());
server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => {
  res.send('Were rollin...Good work!');
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});