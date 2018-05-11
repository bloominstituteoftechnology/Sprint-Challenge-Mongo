const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const db = require('./db.js');
const Budget = require('./Budget/BudgetRouter.js');
const Category = require('./Category/CategoryRouter.js');
const Expense = require('./Expense/ExpenseRouter.js');
const server = express();

db
	.connectTo('mongosprint')
	.then(() => console.log('Connected to Mongod'))
	.catch(err => console.log('Connection Failed', err));

server.use(helmet());
server.use(express.json());

server.use('/api/Budget', Budget);
server.use('/api/Category', Category);
server.use('/api/Expense', Expense);

server.get('/', (req, res) => res.send('API Is OTW'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});