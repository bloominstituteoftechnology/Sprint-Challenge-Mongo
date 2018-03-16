const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const CategoryRouter = require('../Category/CategoryRouter.js');
const BudgetRouter = require('../Budget/BudgetRouter.js');
const ExpenseRouter = require(../Expense/ExpenseRouter.js);
const server = express();

server.use(helmet());
server.use(bodyParser.json());

mongoose
  .connect('mongob://localhost/Budget Tracker')
	.then(() => console.log('Successfully connected to Budget Tracker Database!'))
  .catch(err => console.log('Error connecting to Budget Tracker Database'));

server.use('/Budget', BudgetRouter);
server.use('/Expense', ExpenseRouter);
server.use('/Category', CategoryRouter);

server.get('/', (req, res) => res.send('API running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
