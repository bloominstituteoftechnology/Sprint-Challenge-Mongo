const express = require('express'); // remember to install your npm packages
const helmet = require('hemlet');
const cors = require('cors');
const mongoose = require('mongoose');

//Model-Routers
const budgetRouter = require('./Models/Budget/budgetModel.js');
const categoryRouter = require('./Models/Category/categoryModel.js');
const expenseRouter = require('./Models/Expense/expenseModel.js');

const server = express();

// add your server code

//connect to mongoDB
mongoose
  .connect('mongodb://localhost/sprintDB')
  .then(mongo => {
    console.log('You connected to the server!!!')
  })
  .catch(error => {
    console.log(error)
  });

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/', budgetRouter());
server.use('/api', categoryRouter());
server.use('/api/', expenseRouter());

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
