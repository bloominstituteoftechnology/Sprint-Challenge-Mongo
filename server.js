const express = require('express'); // remember to install your npm packages
const cors = require('cors');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const server = express();
server.use(cors());
server.use(express.json());

// add your server code

server.use('/budget', budgetRouter);
server.use('/category', categoryRouter);
server.use('/expense', expenseRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbBudget', {}, err => {
  if (err) console.log(err);
  console.log('Mongoose connected us to our DB');
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
