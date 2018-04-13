const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost/sprintdb')
.then(() => console.log('connected to mongo'))
.catch(err => console.log('error connecting to databse'))

const budgetRouter = require('./Routes/budgetRoute');
const categoryRouter = require('./Routes/categoryRoute');
const expenseRouter = require('./Routes/expenseRoute');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Running' });
});

server.use('/api/budgets', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
