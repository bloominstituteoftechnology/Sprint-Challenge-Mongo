const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expenseRouter = require('./expense/expenseRouter');

const server = express();

server.use(helmet());
server.use(express.json())

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

mongoose
  .connect('mongodb://localhost/Budgeteer')
  .then(cnx => {
    console.log(`You are connected to the ${cnx.connections[0].name} database.`);
  })
  .catch(err => {
    console.log('There was an error connecting to mongo.');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
