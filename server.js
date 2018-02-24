const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const PORT = process.env.PORT || 3000;

const Budget = require('./api/models/budget');
const Category = require('./api/models/category');
const Expense = require('./api/models/expense');


const routes = require('./api/routes/routes');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

server.use(bodyParser.json());

// routes(server);

server.post('/budget', (req, res) => {
  const budget = new Budget(req.body);
  Budget.create(budget)
    .then(newBud => {
      res.send({ newBud });
    }).catch(err => {
      res.send({ error: 'Unable to create budget' })
    });
});

server.post('/category', (req, res) => {
  const title = req.body.title;
  const cat = new Category(req.body);
  Category.create(cat)
    .then(post => {
      res.status(200).send('Category created')
    })
    .catch(error => {
      res.status(500).send({ error: 'Unable to create a category'})
    });
});

server.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`);
});
