const express = require('express'); // remember to install your npm packages
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const BudgetRoutes = require('./routes/Budget.js');
const CategoryRoutes = require('./routes/Category');
const ExpensesRoutes = require('./routes/Expenses');

mongoose
  .connect('mongodb://localhost/Budget-Tracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// add your server code
server.use('/api/budget', BudgetRoutes);
server.use('/api/category', CategoryRoutes);
server.use('/api/expenses', ExpensesRoutes);

server.get('/', (req, res) => {
  res.status(200).json({ API: 'Running...' });
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
