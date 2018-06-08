const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');

// const db = require('/data/db.js');
// const budgetRouter = require('./budget/budgetRouter');
// const categoryRouter = require('./category/categoryRouter');
// const expensesRouter = require('./expenses/expensesRouter');

const server = express();

// add your server code
// db
//   .connectTo('budget')
//   .then(() => console.log('\n... API Connected to Database ... \n'))
//   .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

server.use(helmet());
server.use(express.json());

// server.use('api/budget'); // budgetRouter middleware
// server.use('api/category'); // categoryRouter middleware
// server.use('api/expenses'); // expensesRouter middleware

server.get('/', (req, res) => res.send('API Running...'));




const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
