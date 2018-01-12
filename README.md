# Assessing your MongoDB Fu

* The purpose of this exercise is to get you used to being quizzed on _Interview
  Questions_ commonly asked about Mongo.
* Answers to your written questions will be recorded in _Answers.md_
* This is to be worked on alone but you can use outside resources. You can
  _reference_ any old code you may have, and the React Documentation, however,
  please refrain from copying and pasting any of your answers. Try and
  understand the question and put your responses in your own words. Be as
  thorough as possible when explaining something.
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a
  no-pressure assessment that is only going to help guide you here in the near
  future. This is NOT a pass/fail situation.
  ## Start by forking and cloning this repository.
  ## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Describe the following: `DataBase`, `Collection` , `Document`
1. Describe how one can achieve the pattern of _relationships_ in MongoDB. What
   needs to take place at the schema level? How do we _'fill'_ in the appropriate relational data using mongoose?
1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

# Project description

### Reminder this is just a backend. Testing your application will require the use of `Postman` or something simliar.

* For this Project we're going to be building out a Backend for a `Budget
  Tracker` app.

## Step 1 - Modeling our Data _hint_: **Three different models, three different files**

* For this project you'll need three different models, budget, Expense and
  Category.

### **Budget**

* This will be the budget that you set for Budget Tracker.
* An budget object saved to the DB should look like this:

```
{
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000,
}
```

### **Expense**

* An expense is a purchase one would make that will affect one's budget.
* There will be two relationships tied to an expense, the `budget` it effects, &
  `category` it belongs to.
* An expense object can look something like this:

```
{
  _id: '503c2b66bcf86cs793443564',
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
}
```

### **Category**

* A category collection will consist of different places you can assign your
  expenses to.
* A category can be something as simple as `groceries`.
* Your relationship to consider here is the relationship between `Expenses` and
  `Categories`
* An example of a category object can look somethign like this:

```
{
  _id: '543d2c72gsb23cd657438921',
  title: 'Groceries',
}
```

## Step 2 - Building our Routes and Controllers (API Specifications)

### `'/budget'`

* Your budget should have a `post` method. So you can use a controller called
  something like `budgetCreate` to save your data through.
* Only worry about creating `ONE` budget for now.

* **NOTE** We only want to `create` an budget, no need to write a getter or even
  update the budget total directly. When we call for data to see how much is
  left in our budget, we'll write a separate endpoint that aggregates that
  information for us. We want to keep our budget total `'pure'` and unaffected
  by our queries.

### `'/category'`

* to `create` a category you should have a `'post'` method that stores the
  category information.
* you can write a `getter` `'get'` method that simply returns all the
  categories. Filter out any un useful information here, meaning we just want
  the title of the categories.
* create a minimum of 4 categories so that when you create your expenses, you
  can assign where they go!
* example of categories could be: `Food/Dining` `Gas/Auto` `Date Nights`
  `Mortgage`

### `'/expense'`

* your expense should have a `'post'` method for creating the expense. To save
  an expense you'll need an `'budget'` `_id` and a `'category'` `_id` so that we
  can build out a relationship between those other collections and our expenses.
* your expense route should also have a `'get'` method that returns all the
  expenses with the populated data.

## Stretch Goal - Aggregation

#### A Note about Aggregation

* Aggregation is used to take data, and return back some sort of useful
  information about the data set. This is something that people spend their
  entire careers doing as data scientists.
* Mongo has a very rich way of doing this called the `aggregation-pipeline`
* Take note of the _aggregation_ method found in
  [these](https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm) docs
  and [here](https://docs.mongodb.com/manual/reference/operator/aggregation/)

### Budget Aggregation `'/budget/:id/summary'`

* For this Route you'll want to write a `'/get'` that will take the `sum` of all
  your expenses, and return the difference between the total from your budget
  and summed up expenses.
* consider what you'll need here.
  [$sum](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/)
  will be your best friend. And you'll also want to consider that you'll need to
  be querying for the total budget.

### Category Spending Aggregation `'/expenses?aggregatedBy=category'`

* With this route, we want to see a list of the categories and what you've spent
  so far.
* sum up all all expenses by category and order the response by total expense.
* Order should be categerories with most expense at the top.

### If you get finished early, go ahead and research Async Await and attempt to refactor your controllers to use this awesome syntactic sugar!
