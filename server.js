const db = require('./data/db.js');

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');

const server = express();

db
  .connectTo('mongoChallenge')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

server.get('/', (req, res) => res.send('API Running'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
