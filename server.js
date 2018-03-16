const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');

const BudgetRoutes = require('./routes/BudgetRoutes.js');
const ExpenseRouter = require('./routes/ExpenseRouter.js');
const CategoryRouter = require('./routes/CategoryRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/budget', BudgetRoutes);
server.use('/expense', ExpenseRouter);
server.use('/category', CategoryRouter);

mongoose
  .connect('mongodb://localhost:/BudgetSprint')
  .then(connect => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connecting to Database failed'))

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
