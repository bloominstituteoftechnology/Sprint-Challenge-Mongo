const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const server = express();
const Budget = require('./api/models/budget.js');
const Category = require('./api/models/category.js');
const Expense = require('./api/models/expense.js');
const port = process.env.PORT || 3000;

const routes = require('./api/routes/routes');
server.use(bodyParser.json());

server.get('/', (req,res) => {
  res.status(200).json({message:'API running'})
});

server.post('/budget',(req,res) => {
  const budegetInformation = req.body;
  if(budegetInformation.budgetAmount){
    const budget = new Budget(budegetInformation);
    budget.save()
      .then(newBudget => {
        res.status(200).json(newBudget)
      })
      .catch(error => {
        res.status(500).json(
          {
            error : 'There was error saving this budget post '
          }
        )
      })
  } else {
    res.status(400).json(
      {
        error: 'Please provide budget amount to proceed'
      }
    )
  }
})

server.post('/category',(req,res) => {
  const categoryInformation = req.body;
  if(categoryInformation.title){
    const category = new Category(categoryInformation);
    category.save()
      .then(newCategory => {
        res.status(200).json(newCategory)
      })
      .catch(error => {
        res.status(500).json(
          {
            error : 'There was error saving this category post '
          } 
        )
      })
  } else {
    res.status(400).json(
      {
        error: 'Please provide category title to proceed'
      }
    )
  }
})

server.get('/category',(req,res) => {
  Category.find({})
    .then(cats => res.status(200).json(cats))
    .catch(error => res.status(500).json({error: 'no categories found'}))
})

server.post('/expense',(req,res) => {
  const expenseInformation = req.body;
  if(expenseInformation.amount){
    const expense = new Expense(expenseInformation);
    console.log(expense)
    expense.save()
      .then(newExpense => {
        res.status(200).json(newExpense)
      })
      .catch(error => {
        res.status(500).json(
          {
            error : 'There was error saving this Expense post '
          }
        )
      })
  } else {
    res.status(400).json(
      {
        error: 'Please provide Expense amount to proceed'
      }
    )
  }
})

server.get('/expense',(req,res) => {
  Category.find({})
    .then(expenses => res.status(200).json(expenses))
    .catch(error => res.status(500).json({error: 'no categories found'}))
})

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/budget', { useMongoClient: true })
.then(function(){
  server.listen(port,function(){
      console.log(`Database connected. Server up and running on ${port}`)
  });
})
.catch(function(err){
  console.log('Database Connection Failed')
})
