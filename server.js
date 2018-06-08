const express = require('express'); // remember to install your npm packages
const helmet = require('helmet'); 
const cors = require('cors');
const mongoose = require('mongoose')


const budgetRouter = require('./Budget/budgetRouter.js');
const categoryRouter = require('./Category/categoryRouter.js');
const expenseRouter = require('./Expense/expenseRouter.js');

const server = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dbBudget');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
