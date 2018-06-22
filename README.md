# Assessing your MongoDB Fu

- The purpose of this exercise is to get you used to being quizzed on _Interview
  Questions_ commonly asked about Mongo.
- Answers to your written questions will be recorded in _Answers.md_
- This is to be worked on alone but you can use outside resources. You can
  _reference_ any old code you may have, and the React Documentation, however,
  please refrain from copying and pasting any of your answers. Try and
  understand the question and put your responses in your own words. Be as
  thorough as possible when explaining something.

## Friendly Reminder

Don't fret or get anxious. This is a no-pressure assessment designed to help us discover better ways to help you move forward and make the learning experience better for you.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1.  Describe the following: `DataBase`, `Collection` , `Document`
1.  Describe how one can achieve the pattern of _relationships_ in MongoDB. What
    needs to take place at the schema level? How do we _'fill'_ in the
    appropriate relational data using mongoose?
1.  Explain a way to break up an API into Sub-Applications, which tool did we use to do that?

# Project description

### Reminder this is just a backend. Testing your application will require the use of `Postman` or something similar.

- For this Project we're going to be building out a Backend for a `Budget Tracker` app.

## Step 1 - Modeling our Data _hint_: **Three different models, three different files**

- For this project you'll need three different models, budget, Expense and
  Category.

### **Budget**

- This will be the budget that you set for Budget Tracker.
- An budget object saved to the DB should look like this:

```
{
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000,
}
```

### **Expense**

- An expense is a purchase one would make that will affect one's budget.
- There will be two relationships tied to an expense, the `budget` it effects, &
  `category` it belongs to.
- An expense object when saved to the database would look something like this:

```
{
  _id: ObjectId('503c2b66bcf86cs793443564'),
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
}
```

### **Category**

- A category collection will consist of different places you can assign your
  expenses to.
- A category can be something as simple as `groceries`.
- Your relationship to consider here is the relationship between `Expenses` and
  `Categories`
- An example of a category object after it is saved to the databse:

```
{
  _id: ObjectId('543d2c72gsb23cd657438921'),
  title: 'Groceries',
}
```

## Step 2 - Endpoints

Add your code to `server.js`. Remember to install any npm packages you need.

### `POST to '/budgets'`

- Used to save a new budget to the database.
- Only worry about creating `ONE` budget for now.

- **NOTE** We only want to `create` a budget, no need to write a getter or even
  update the budget total directly. When we call for data to see how much is
  left in our budget, we'll write a separate endpoint that aggregates that
  information for us. We want to keep our budget total `'pure'` and unaffected
  by our queries.

### `POST to '/categories'`

- to `create` a category you should have a `'post'` method that stores the
  category information.
- you can write a `getter` `'get'` method that simply returns all the
  categories. Filter out any unuseful information here, meaning we just want
  the title of the categories.
- create a minimum of 4 categories so that when you create your expenses, you
  can assign where they go!
- example of categories could be: `Food/Dining` `Gas/Auto` `Date Nights`
  `Mortgage`

### `'/expenses'`

- your expense should have a `'post'` method for creating the expense. To save
  an expense you'll need an `'budget'` `_id` and a `'category'` `_id` so that we
  can build out a relationship between those other collections and our expenses.
- your expense route should also have a `'get'` method that returns all the
  expenses with the populated data.

## Stretch Goal

You are **not required** to work on the stretch goal, but if you're done with the main project go ahead an try to figure out how to use MongoDB's Aggregation Framework.

1.  Add as many CRUD endpoints as you can and break the application into separate Routers.
1.  Validate the data at the endpoint, before saving it to the database.
1.  Add a React front end.

**Good Luck!**
