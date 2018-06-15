Step 1 - Modeling our Data
[x]three different models, budget, Expense and Category.

Step 2 - Endpoints
[x]Add your code to server.js. Remember to install any npm packages you need.

---POST to '/budgets'---
[x]Only worry about creating ONE budget for now.

---POST to '/categories'---
[x]to create a category you should have a 'post' method that stores the category information.
[x]you can write a getter 'get' method that simply returns all the categories. Filter out any unuseful information here, meaning we just want the title of the categories.
[]create a minimum of 4 categories so that when you create your expenses, you can assign where they go!

---'/expenses'---
[x]your expense should have a 'post' method for creating the expense. To save an expense you'll need an 'budget' _id and a 'category' _id so that we can build out a relationship between those other collections and our expenses.
[x]your expense route should also have a 'get' method that returns all the expenses with the populated data.