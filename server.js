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

//creating and saving the category document
// const newCategory = new CategoryModel({
//   title: "Gaming",
// });

// newCategory.save()
// .then(response => console.log(`The category was saved:\n ${response}`))
// .catch(err => console.log(`There was an error: \n ${err}`))

//post handler for creating and saving a new category document
app.post("/")

//creating and saving the expense document
// const newExpense = new ExpenseModel({
//   amount: 20,
//   description: "Switch Games",
//   budget: mongoose.Types.ObjectId("5aac12951cc99d05ac436313"),
//   category: mongoose.Types.ObjectId("5aac14fe8c245b0948668a47"),
// })
// .save()
// .then(response => console.log(`The expense was saved: \n ${response}`))
// .catch(err => console.log(`There was an error: \n ${err}`));

//populating the expense document
// ExpenseModel
// .find()
// .populate("budget")
// .populate("category")
// .then(response => console.log(response))
// .catch(err => console.log(err));