const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose');
const helmet = require('helmet');
const BudgetModel = require('./Budget/BudgetModel.js');
const CategoryModel = require('./Category/CategoryModel.js');
const ExpenseModel = require('./Expense/ExpenseModel.js');

// { CATEGORY
//   "_id": "5aac0e5842996f2e84d71690",
//   "title": "Hot Chocolate",
//   "__v": 0
// }
// { BUDGET
//   "_id": "5aac06358f018c18942ff578",
//   "title": "Ski Trip",
//   "budgetAmount": 10500,
//   "__v": 0
// }

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
    res.send({ error: `I need some body` });
  }
});

server.get('/budget', (req, res) => {
  BudgetModel.find()
    .then(budgets => {
      res.status(201).send(budgets);
    })
    .catch(err =>
      res.status(500).send({
        error: 'There was an issue retrieving your info from the database.'
      })
    );
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
    res.send({ error: `I need some body.` });
  }
});

server.get('/category', (req, res) => {
  CategoryModel.find()
    .then(budgets => {
      res.status(201).send(budgets);
    })
    .catch(fail => {
      res.status(500).send({
        error: 'There was an issue retrieving your info from the database'
      });
    });
});

server.get('/expense', (req, res) => {
  ExpenseModel.find()
  .populate('budget category')
    .then(expenses => {
      res.status(201).send(expenses);
    })
    .catch(fail => {
      res.status(500).send({
        error: 'There was an issue retrieving your info from the database'
      });
    });
});

server.post('/expense', (req, res) => {
  const { body } = req;
  const newExpense = new ExpenseModel(body);

  if (body) {
    if (
      body.hasOwnProperty('amount') &&
      body.hasOwnProperty('budget') &&
      body.hasOwnProperty('category')
    ) {
      newExpense
        .save()
        .then(pass => {
          res.status(201).send({ success: 'New expense saved.' });
        })
        .catch(err => {
          res.status(500).send({ err: 'There was an issue saving your data.' });
        });
    } else {
      res.status(400);
      res.send({
        error: `Must provide an 'amount', 'budget ID', and 'category ID'.`
      });
    }
  } else {
    res.status(400);
    res.send({ error: `I need some body.` });
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
