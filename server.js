const express = require('express'); // remember to install your npm packages
const server = express();
const bodyParser = require('body-parser');
const Budget = require('./api/models/BudgetModels.js');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

server.use(bodyParser.json());

// add your server code
server.post('/', function(req, res) {
  const { title, budgetamount } = req.body;
  const newBudget = { title, budgetamount };
  newBudget._id = ObjectId();
  const budget = new Budget(newBudget);
  res.send(budget);
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
