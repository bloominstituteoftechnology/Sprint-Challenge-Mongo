const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// const db = require('/data/db.js');
const budgetRouter = require('./budget/budgetRouter');
const categoryRouter = require('./category/categoryRouter');
const expensesRouter = require('./expense/expenseRouter');

const server = express();

// add your server code
// db
//   .connectTo('budget')
//   .then(() => console.log('\n... API Connected to Database ... \n'))
//   .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('api/budget', budgetRouter); // budgetRouter middleware
server.use('api/category', categoryRouter); // categoryRouter middleware
server.use('api/expenses', expensesRouter); // expensesRouter middleware

server.get('/', (req, res) => res.send('API Running...'));




const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbbudget', {}, err => {
  if (err) console.log(err);
  console.log('Mongoose connected to our DB');
});
server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
