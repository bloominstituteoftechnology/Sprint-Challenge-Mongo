const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const server = express();
const db = require('./db.js');

const budgetRouter = require('./budget/budgetController');
const expenseRouter = require('./expense/expenseController');
const categoryRouter = require('./category/categoryController');

db
	.connectTo('budget')
	.then(() => console.log('\n... API Connected to Database ...\n'))
	.catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());
server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);
server.use('/expenses', expenseRouter);

server.get('/', (req, res) => res.send('Server is running.'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});
