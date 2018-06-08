const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./db.js');

const budgetRouter = require('./budget/budgetRouter.js');
const expenseRouter = require('./expense/expenseRouter.js');
const categoryRouter = require('./category/categoryRouter.js');

const server = express();

db
  .connectTo('sprintMongo')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

// add your server code

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/budgets', budgetRouter);
server.use('/api/expenses', expenseRouter);
server.use('/api/categories', categoryRouter);

server.get('/', (req, res) => res.send('API running...'));

// mongoose.Promise = global.Promise;

// mongoose
//   .connect('mongodb://localhost/sprintMongo')
//   .then(mongo => {
//     console.log('Mongoose connected us to our database.');
//   })
//   .catch(error => {
//     console.log('Database connection failed.', error);
//   })

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
