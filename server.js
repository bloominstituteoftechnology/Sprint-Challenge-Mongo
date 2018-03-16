//importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//import models
const BudgetModel = require("./models/Budget");
const CategoryModel = require("./models/Category");
const ExpenseModel = require("./models/Expense");

//initializing express
const app = express();

//starting mongoose and express
mongoose.connect("mongodb://localhost:27017/sprint")
.then(() => {
  const port = process.env.port || 3000;
  app.listen(port);
  console.log(`The server is listening on port ${port}`)
});

//setting middleware
app.use(bodyParser.json());
mongoose.Promise = global.Promise;

//post handler for creating and saving a new budget document
app.post("/budget", (req, res) => {
  const newTitle = req.body.title;
  const newAmount = req.body.amount;

  const newBudget = new BudgetModel({
    title: newTitle,
    budgetAmount: newAmount,
  })
  .save()
  .then(response => {
    console.log(`The budget was saved: ${response}`);
    res.send(`The budget was saved successfully!`);
  })
  .catch(err => {
    console.log(`There was an error posting the budget: \n ${err}`);
    res.send(`There was an error saving the budget`);
  });
})

//get handler that returns all budget documents
app.get("/budget", (req, res) => {
  BudgetModel.find()
  .then(response => {
    console.log(`The budget documents were sent to the client`);
    res.json(response);
  })
  .catch(err => {
    console.log(`There was an error getting the budget documents: \n ${err}`);
    res.send(`There was an error getting the budget documents`);
  })
})

//post handler for creating and saving a new category document
app.post("/category", (req, res) => {
  const newTitle = req.body.title;

  const newCategory = new CategoryModel({
       title: newTitle,
     })
     .save()
     .then(response => {
       console.log(`The category was saved successfully: \n ${response}`);
       res.send(`The category of ${response.title} was saved successfully`);
     })
     .catch(err => {
       console.log(`There was an error saving the category: \n ${err}`);
       res.send(`There was an error saving the category`);
     })
});

//get handler that returns all category documents
app.get("/category", (req, res) => {
  CategoryModel.find()
  .then(response => {
    console.log(`The category documents were sent to the client`);
    res.json(response);
  })
  .catch(err => {
    console.log(`There was an error getting the category documents: \n ${err}`);
    res.send(`There was an error getting the category documents`);
  })
})

app.post("/expense", (req, res) => {
  const newAmount = req.body.amount;
  const newDescription = req.body.description;
  const newBudgetId = req.body.budgetId;
  const newCategoryId = req.body.categoryId;

  const newExpense = new ExpenseModel({
    amount: newAmount,
    description: newDescription,
    budget: newBudgetId,
    category: newCategoryId,
  })
  .save()
  .then(response => {
    console.log(`The expense document was saved successfully: \n ${response}`);
    res.send(`The expense document was saved successfully!`);
  })
  .catch(err => {
    console.log(`There was an error saving the expense document: \n ${err}`);
    res.send(`There was an error saving the expense document`);
  })
})

//get handler that populates and returns all expense documents
app.get("/expense", (req, res) => {
  ExpenseModel.find()
  .populate("budget")
  .populate("category")
  .then(response => {
    console.log(`The expense documents were sent to the client`);
    res.json(response);
  })
  .catch(err => {
    console.log(`There was an error getting the expense documents: \n ${err}`)
    res.send(`There was an error getting the expense documents`);
  })
})