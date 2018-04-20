const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

const server = express();

const db = require('./src/db.js');
const budgetRouter = require('./src/budget/budgetRouter.js');
const categoryRouter = require('./src/category/categoryRouter.js');
const expenseRouter = require('./src/expense/expenseRouter.js');


server.use(helmet());
server.use(express.json())
// add your server code

db
  .connectTo('budgetTracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use('/api/budget', budgetRouter);
server.use('/api/category', categoryRouter);
server.use('/api/expense', expenseRouter);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
