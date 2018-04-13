const express = require('express');
const helmet = require('helmet');

const db = require('./db.js');
const budgetsRouter = require('./budgets/budgetsRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');

const server = express();

db
	.connectTo('trackbudget')
	.then(() => console.log('Yes! DB achieved'))
	.catch(err => console.log('DB explosion:', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

server.get('/', (req, res) => res.send('Run API run'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`Server up and running on ${port}`);
});
