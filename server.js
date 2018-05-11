const express = require('express');

const db = require("./data/db.js");
const budgetsRouter = require("./budget/budgetsRouter.js");
const categoriesRouter = require("./category/categoriesRouter.js");
const expensesRouter = require("./expense/expensesRouter.js");


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
