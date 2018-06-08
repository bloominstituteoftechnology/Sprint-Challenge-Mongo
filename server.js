const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const db = require('./data/db.js');

/**
 * IMPORT ROUTERS: import any needed Router.
 */
const budgetRouter = require('./budget/budget.router');
const categoriesRouter = require('./categories/categories.router');
const expensesRouter = require('./expenses/expenses.router');

/**
 * DEFINE: Server.
 */
const server = express();

/**
 * CONNECT TO DATABASE: Connect to MongoDB.
 */
db.connectTo('budget_tracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

/**
 * DEFINE: global Pre-Middlewares is any.
 */
server.use(helmet());
server.use(express.json());

/**
 * DEFINE: Endpoints.
 */
server.get('/', (req, res) => res.send('API Running...'));
server.use('/api/budget', budgetRouter);
server.use('/api/expenses', expensesRouter);
server.use('/api/categories', categoriesRouter);

/**
 * DEFINE: global Post-Middlewares if any
 */

/**
 *  :LAUNCH SERVER
 */
const port = process.env.PORT || 6666;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
