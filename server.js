const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const db = require('./data/db.js');

/**
 * IMPORT ROUTERS: import any needed Router.
 */
const Budget = require('./budget/Budget.model');
const Categorie = require('./categories/Categorie.model');
const Expense = require('./expenses/Expense.model');

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
