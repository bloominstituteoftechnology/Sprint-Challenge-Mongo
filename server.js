const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const budgetRouter = require('./budgets/budgetRouter');
const categoryRouter = require('./categories/categoryRouter');
const expenseRouter = require('./expenses/expenseRouter');
const localHost = 'localhost:27017';
const database = 'budgetdb';
const server = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(`mongodb://${localHost}/${database}`)
  .then(response => {
      console.log("Connection Successful")
  })
  .catch(error => {
      console.log("Connection Failed")
  });

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/budget', budgetRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/expenses', expenseRouter);

server.get('/', (req, res) => {
  res.status(200).json({ API: 'running' });
});

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
