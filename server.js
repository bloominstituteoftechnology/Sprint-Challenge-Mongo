const express = require('express');
const db = require('./data/db.js');

const budgetsRouter = require('./budget/budgetsRouter.js');
const categoriesRouter = require('./category/categoriesRouter.js');
const expensesRouter = require('./expense/expensesRouter.js');

const server = express();

db
  .connectTo('sprintchallengeDB')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(express.json());

server.use('/api/budget', budgetsRouter);
server.use('/api/category', categoriesRouter);
server.use('/api/expense', expensesRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
