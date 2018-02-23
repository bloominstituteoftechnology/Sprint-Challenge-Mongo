const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

server.use(bodyParser.json());

const Budget = require('./api/models/budget.js');
const Expense = require('./api/models/expense.js');
const Category = require('./api/models/category.js');

const port = process.env.PORT || 3000;

const routes = require('./api/routes/routes');

routes(server);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'Up and running! '})
})

server.post('/budget', (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);

  Budget.create(budget)
  .then(savedBudget => {
    res.send(savedBudget)
  })
  .catch(error => {
    res.send({ error: "Could not create new budget." });
  });
});

server.post('/category', (req, res) => {
  const {title} = req.body;
  const category = new Category({ title });

  Category.create(category)
  .then(savedCategory => {
    res.send(savedCategory)
  })
  .catch(error => {
    res.send({ error: 'Could not create new category.' });
  });
});




server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
