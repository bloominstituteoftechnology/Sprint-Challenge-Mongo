//importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//import models
const BudgetModel = require("./models/Budget");
const CategoryModel = require("./models/Category");

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

