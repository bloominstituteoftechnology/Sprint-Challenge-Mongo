const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/budgetTrackerdb')
.then(mongo => {
  console.log(`Sucessfully connected to database`)
})
.catch(err => {
  console.log(`Error connecting to database: ${err}`)
})

const budgetRoutes = require('./routers/budgetRoutes');
const expenseRoutes = require('./routers/expenseRoutes');
const categoryRoutes = require('./routers/categoryRoutes');

const server = express();

// add your server code
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/budgets', budgetRoutes);
server.use('/api/expenses', expenseRoutes);
server.use('/api/category', categoryRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
