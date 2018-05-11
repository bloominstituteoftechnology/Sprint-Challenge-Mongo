const express = require('express'); // remember to install your npm packages

const helmet = require('helmet');
const mongoose = require('mongoose');
//cors may be needed later

// add your server code
//connect to mongo
mongoose
.connect('mongodb://localhost/budgetTrackerdb')
.then(mongo => {
  console.log(`Sucessfully connected to database`)
})
.catch(err => {
  console.log(`Error connecting to database: ${err}`)
})

const budgetRoutes = require('./routers/budgetRoutes.js');
const categoryRoutes = require('./routers/categoryRoutes.js');
const expenseRoutes = require('./routers/expenseRoutes.js');

const server = express();

//Middleware
server.use(helmet());
server.use(express.json());
//cors may be needed later

//Routing
server.use('/api/budgets', budgetRoutes);
server.use('/api/category', categoryRoutes);
server.use('/api/expenses', expenseRoutes);

//server listener
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
