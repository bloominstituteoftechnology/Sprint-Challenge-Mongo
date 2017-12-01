const accountControllers = require("../controllers/accountControllers");
const categoryControllers = require("../controllers/categoryControllers");
const expenseControllers = require("../controllers/expenseControllers");
const budgetControllers = require("../controllers/budgetControllers");

module.exports = app => {
  // Todo: Fill in your routes here
  app
    .route("/account") // a place to create an account - req post
    .post(accountControllers.newAccount); // create

  app
    .route("/category") // a place to create a category - req post, get, filter
    .post(categoryControllers.newCategory) // create
    .get(categoryControllers.displayAllCategories); // return all

  app
    .route("/expense") // a place to create an expense - req post, get
    .post(expenseControllers.newExpense) // create
    .get(expenseControllers.displayAllExpenses); // return all

  app
    .route("/budget") // aggregation destination
    //.post(budgetControllers.budgetRemaining) // create
    .get(budgetControllers.sumOfExpenses); // return all
};
