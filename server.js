const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();
const db = require('./db.js');
// add your server code
const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./budget/categoryRouter.js');

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);
server.use('/api/category', categoryRouter);


server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
  res.status(201).json('Server Running')
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
