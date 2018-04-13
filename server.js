const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const db = require('./data/db.js');
const budgetRouter = require('./budgets/budgetsRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');

const server = express();

db
  .connectTo('budgettracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch((err) => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

server.get('/', (req, res) => res.send('API Running...'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
