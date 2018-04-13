const express = require('express'); // remember to install your npm packages
const morgan = require('morgan');

const server = express();
const db = require('./database/db.js');

const budgetsRouter = require('./budgets/budgetsRouter.js');
const categoriesRouter = require('./categories/categoriesRouter.js');
const expensesRouter = require('./expenses/expensesRouter.js');

db.connectTo('budget')
  .then(() => console.log('\n... Database Connected ...\n'))
  .catch(err => console.log('\n*** ERROR: Could not connect to Database *** \n', err));

// add your server code
server.use(express.json());
server.use(morgan('dev'));

server.use('/api/budgets', budgetsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/expenses', expensesRouter);

server.get('/', (req, res) => res.send('API is a go!'));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
