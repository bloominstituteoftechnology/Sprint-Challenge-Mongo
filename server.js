const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const server = express();
// Endpoints
const budgetPoints = require('./endpoints/budgetPoints.js');
const categoryPoints = require('./endpoints/categoryPoints.js');
const expensePoints = require('./endpoints/expensePoints.js');

/* --- Middleware --- */
server.use(helmet());
server.use(cors());
server.use(express.json());

/* --- Good morning, Mongoose! --- */
mongoose.connect('mongodb://localhost/dbBudget', {}, err => {
  if (err) console.log('\n*** ERROR Connecting to Database ***\n', err);
  console.log('\n... API Connected to Database ...\n');
});

/* --- Endpoints --- */
server.use('/budgets', budgetPoints);
server.use('/categories', categoryPoints);
server.use('/expenses', expensePoints);

/* --- Server START --- */
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
