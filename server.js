const express = require('express'); // remember to install your npm packages
const mongoose = require('mongoose')


const server = express();

// add your server code

mongoose.connect('mongodb://localhost/budget')

const db = mongoose.connect('mongodb://localhost/budget')
.then(() => console.log('\n... API Connected to Database ...\n'))
.catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));

const Budget = require('./budgetModel');
const Category = require('./categoryModel');
const Expense = require('./expenseModel');
server.use(express.json());
// ENDPOINTS

// POST to '/budgets'
// Used to save a new budget to the database.

// Only worry about creating ONE budget for now.

server.post('/budgets', (req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);
  Budget.create(budget)
  .then(saveBudget => {
    res.status(201).json(saveBudget)
  })
  .catch(error => {
    res.send({ error: 'Error - unable to create new budget'});
  })
})

/* `POST to '/categories'`

* to `create` a category you should have a `'post'` method that stores the
  category information.
* you can write a `getter` `'get'` method that simply returns all the
  categories. Filter out any unuseful information here, meaning we just want
  the title of the categories.
* create a minimum of 4 categories so that when you create your expenses, you
  can assign where they go!
* example of categories could be: `Food/Dining` `Gas/Auto` `Date Nights`
  `Mortgage` */


  server.post('/categories', (req, res) => {
    const { title } = req.body;
    const category = new Category({ title });
    Category.create(category)
    .then(saveCategory => {
      res.send(saveCategory);
      })
      .catch(error => {
        res.status(500).json({error:' Error: new category not saved to database'})
  });
});

server.get('/categories', (req, res) => {
  let query = Category.find()
  query.select('title -_id')
  .then(category => {
    res.send(category);
  })
  .catch(error => {
    res.send(error);
  });
});

/* ### `'/expenses'`

* your expense should have a `'post'` method for creating the expense. To save
  an expense you'll need an `'budget'` `_id` and a `'category'` `_id` so that we
  can build out a relationship between those other collections and our expenses.
* your expense route should also have a `'get'` method that returns all the
  expenses with the populated data. */

  server.post('/expense', (req, res) => {
    const { amount, description, budget, category } = req.body;
    const expense = new expense(req.body);
    Expense.create(expense)
    .then(saveExpense => {
      res.send(201).json(saveExpense);
    })
    .catch(err => {
      res.status(500).json({error: 'Error addind expense to the database'});
    });
  });

  server.get('/expense', (req, res) => {
    Expense.find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
      res.status(201).json(expenses);
    })
    .catch(error => {
      res.status(500).json({error: 'Expense not found'});
    })
  })



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
  
