const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

server.use(bodyParser.json());

const Budget = require('./Models/BudgetModel.js');
const Expense = require('./Models/ExpenseModel.js');
const Category = require('./Models/CategoryModel.js');

const port = process.env.PORT || 3000;

const routes = require('./api/routes/routes');
routes(server);

mongoose.Promise = global.Promise;

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  
  if (title && budgetAmount) {
    const budget = new Budget(req.body)
    budget
      .save()
      .then(savedBudget => {
        res
          .status(201)
          .json(savedBudget);
      })
      .catch(error => {
        res
          .status(500)
          .json({ errorMessage: 'There was a problem saving the budget to the database.' });
      });
  } else {
    res
      .status(400)
      .json({ errorMessage: "You must provide both a title and budgetAmount." });
  }
});


mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
