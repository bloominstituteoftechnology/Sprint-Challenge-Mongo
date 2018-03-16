//importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//import models
const BudgetModel = require("./models/Budget");
const CategoryModel = require("./models/Category");
const ExpenseModel = require("./models/Expense");

//starting mongoose and express
mongoose.connect("mongodb://localhost:27017/sprint")
.then(() => {
  const port = process.env.port || 3000;
  const app = express();
  app.listen(port)
  console.log(`The server is listening on port ${port}`)
});

//creating and saving the budget document
// const newBudget = new BudgetModel({
//   title: "Video Game Budget",
//   budgetAmount: 120,
// })

// newBudget.save()
// .then(response => console.log(`The budget was saved: ${response}`))
// .catch(err =>  console.log(`There was an error: ${err}`));

//creating and saving the category document
// const newCategory = new CategoryModel({
//   title: "Gaming",
// });

// newCategory.save()
// .then(response => console.log(`The category was saved:\n ${response}`))
// .catch(err => console.log(`There was an error: \n ${err}`))

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