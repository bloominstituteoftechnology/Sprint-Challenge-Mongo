const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const db = require('./data/db.js');
const budgetsRouter = require('./budgets/budgetsRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');
const cors = require('cors');

const server = express();

db
  .connectTo('budgettracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());
server.use(cors());

// add your server code

server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

server.get('/', (req, res) => res.send('API stunning'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
