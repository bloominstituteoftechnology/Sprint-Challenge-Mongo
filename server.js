const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const BudgetModel = require('./Budget/BudgetModel.js');
const CategoryModel = require('./Category/CategoryModel.js');

const server = express();
server.use(express.json());
server.use(helmet());

server.post('/budget', (req, res) => {
  const { body } = req;
  if (body) {
    if (body.hasOwnProperty('title') && body.hasOwnProperty('budgetAmount')) {
      const newBudget = new BudgetModel(body);
      newBudget
        .save()
        .then(pass => {
          res.status(201);
          res.send({ success: 'New budget added successfully.' });
        })
        .catch(fail => {
          res.status(500);
          res.send({ error: 'There was a issue saving to the Database' });
        });
    } else {
      res.status(400);
      res.send({ error: `Must provide a 'title' and a 'budgetAmount'` });
    }
  } else {
    res.status(400);
    res.send({error: `I need some body`})
  }
});

server.post('/category', (req, res) => {
  const { body } = req;
  if (body) {
    if (body.hasOwnProperty('title')) {
      const newCategory = new CategoryModel(body);
      newCategory
        .save()
        .then(pass => {
          res.status(201);
          res.send({ success: 'New category added successfully.' });
        })
        .catch(fail => {
          res.status(500);
          res.send({ error: 'There was a issue saving to the Database.' });
        });
    } else {
      res.status(400);
      res.send({ error: `Must provide a 'title'.` });
    }
  } else {
    res.status(400);
    res.send({error: `I need some body.`})
  }
});

mongoose
  .connect('mongodb://localhost/BudgetTracker')
  .then(pass => {
    console.log(`Connected to Mongo`);
  })
  .catch(fail => {
    console.log(`<!> Something's up, couldn't connect to Mongo <!>`);
  });

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
