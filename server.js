const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();

const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');


// add your server code

server.use('api/budget', budgetRouter);
server.use('api/category', categoryRouter);

server.use(helmet());
server.use(express.json());

mongoose
  .connect('mongodb://localhost/api')
  .then(conn => {
    console.log('connected to Mongo');
  })
  .catch(err => {
    console.log('error connecting to Mongo')
  })

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

