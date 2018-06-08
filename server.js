const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();
// const db = require('./db.js');

// db
//   .connectTo('budgetTracker')
//   .then(() => console.log('\n... API Connected to Database ...\n'))
//   .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

mongoose
  .connect('mongodb://localhost/budgetdb')
  .then(() => console.log('connected to db'))
  .catch(error => console.log('error connecting to db', error))

server.use(express.json());
server.use(cors());
server.use(helmet());

const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');

server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);
server.use('/api/category', categoryRouter);


server.get('/', (req, res) => {
  res.status(201).json('Server Running')
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
