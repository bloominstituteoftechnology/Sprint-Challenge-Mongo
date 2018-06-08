const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const server = express();

// add your server code

const budgetRouter = require ('./budget/budgetRouter.js');
const categoryRouter = require ('./category/categoryRouter.js');
const expenseRouter = require ('./expense/expenseRouter.js');

mongoose.connect('mongodb://localhost/budgetdb')
  .then(mongo => {
    console.log('\n.. API connected to Database! ...\n');
  })

  .catch(error => {
    console.log('\n.. unable to connect to database ..\n');
  });

server.use(helmet());
server.use(express.json());

server.use('api/budget', budgetRouter);
server.use('api/expense', expenseRouter);
server.use('api/category', categoryRouter);

server.get('/', (req, res) => res.send('Hello, Kelly'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
