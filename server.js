const express = require('express'); // remember to install your npm packages
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const budgetRouter = require('./api/controllers/BudgetControllers.js');
const expenseRouter = require('./api/controllers/ExpenseControllers.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/check-book')
  .then(conn => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch(err => {
    console.log("Database connection failed....");
})

// add your server code
server.use(bodyParser.json());

server.use('/api/budget', budgetRouter);
server.use('/api/expense', expenseRouter);

server.post('/', function(req, res) {
  res.send("Main")
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
