const express = require('express'); // remember to install your npm packages
const server = express();
const helmet = require('helmet');
const mongoose = require('mongoose');

const Budget = require('./Budget');
const Category = require('./Category');
const Expense = require('./Expense');

mongoose
.connect('mongodb://localhost/budgetdb')
.then(mongo => console.log('\n Connected to BudgetDB \n'))
.catch( err => console.log('Error connecting to BudgetDB'))


server.use(helmet());
server.use(express.json());

server.post('/budgets', (req, res) => { // POSTS NEW BUDGET 
  const userInput = req.body;
  const budget = new Budget(userInput);
  budget
  .save()
  .then(budget => res.status(201).json(budget))
  .catch(err => res.status(500).json(err))
})

server.get('/categories', (req, res) => { //GETS CATEGORIES 
    Category
    .find()
    .then(category => res.status(200).json(category))
    .catch(err => res.status(500).json(err))
})

server.post('/categories', (req, res) => { // POSTS NEW CATEGORY 
  const userInput = req.body;
  const category = new Category(userInput);
  category
  .save()
  .then(category => res.status(201).json(category))
  .catch(err => res.status(500).json(err))
})

server.get('/expenses', (req, res) => { // GET EXPENSES 
 expense = Expense.find()
  
  // .populate("budget", "title")
  // .populate('budget')

  // const {budget, category } = req.query;
  
  // if (budget) {
  //   const filter = new RegExp(budget, 'i')
  //   query.where({ budget: filter })
  // }

 .then(expense => res.status(200).json(expense))
  .catch(err => res.status(500).json({ err: err.message }))
})

server.post('/expenses', (req, res) => { // POST EXPENSES 
    const userInput = req.body;
    const expense = new Expense(userInput);
    expense
    .save()
    .then(category => res.status(201).json(category))
    .catch(err => res.status(500).json(err))
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
