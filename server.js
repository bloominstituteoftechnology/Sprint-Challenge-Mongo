const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const budgetRouter = require('./budget/budgetRouter.js');
const categoryRouter = require('./category/categoryRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');

const server = express();

// add your server code
mongoose
.connect('mongodb://localhost/budgetdb')
.then(mongo => {
  console.log('connected to database');
})
.catch(err => {
  console.log('Error connecting to database', err);
});


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

server.get('/', function(req, res) {
  res.status(200).json({ api: 'running' });
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
