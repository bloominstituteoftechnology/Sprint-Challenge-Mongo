const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/budgettrackerdb')
.then(() => console.log('\n=== connected to mongo ===\n'))
.catch(error => console.log('There was an error connecting to mongo. :('));

const budgetController = require('./budget/budgetController');
const expenseController = require('./expense/expenseController');
const categoryController = require('./category/categoryController')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(500).json({ api: 'running'});
});

server.use('/api/budgets', budgetController);
//server.use('/api/expenses', expenseController);
server.use('/api/categories', categoryController);
 
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
