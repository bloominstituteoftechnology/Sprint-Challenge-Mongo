const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');

// const db = require('./data/db.js');
const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expenses/expenseRouter.js');
const categoryRouter = require('./categories/categoryRouter.js');

const server = express();

// add your server code
mongoose
.connect('mongodb://localhost/budgetdb')
.then(() => console.log('\n... API Connected to Database ...\n'))
.catch(err => console.log('\n*** Error Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/categories', categoryRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5005;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
