const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');

const mongoose = require('mongoose');

const db = require('./data/db.js');
const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const server = express();

db
  .connectTo('budgetdb')
  .then(mongo => {
    console.log('connected to db');
  })
  .catch( err => {
    res.status(500).json(err);
    console.log('Error connecting to db', err)
  })



// add your server code
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/budget', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => {
  res.send('API Running...')
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
