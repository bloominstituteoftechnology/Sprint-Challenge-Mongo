//importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");


//starting mongoose and express
mongoose.connect("mongodb://localhost:27017/sprint")
.then(() => {
  const port = process.env.port || 3000;
  const app = express();
  app.listen(port)
  console.log(`The server is listening on port ${port}`)
});

//import models
const BudgetModel = require("./models/budget");

const newBudget = new BudgetModel({
  title: "Video Game Budget",
  budgetAmount: 120,
})

newBudget.save()
.then(response => console.log(`The budget was saved: ${response}`))
.catch(err =>  console.log(`There was an error: ${err}`));

