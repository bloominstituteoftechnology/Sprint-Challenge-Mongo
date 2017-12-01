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
   needs to take place at the schema level? How do we _'fill'_ in the
   appropriate relational data using mongoose?
1. Describe what MVC Archtecture is and how we have used it this week with
   **Node/Express/Mongoose**.

# Project description

* For this Project we're going to be building out a Backend for a `Budget
  Tracker` app. Take note of the _aggregation_ method found in
  [these](https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm) docs

## Step 1 - Modeling our Data _hint_: **Three different models, three different files**

* For this project you'll need three different models, Account, Expense and
  Category

### **Account**

* This will be the budget that you set for Budget Tracker.
* An account object saved to the DB should look like this:

```
{
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Monthly Spending',
  amount: 300,
}
```

### **Expense**

* An expense is a purchase one would make that will affect one's budget.
* There will be two relationships tied to an expense, the `account` it effects,
  & `category` it belongs to.
* An expense object can look something like this:

```
{
  _id: '503c2b66bcf86cs793443564',
  amount: 35,
  description: 'potatoes',
  account: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
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

## Step 2 - Building our Routes and Controller (API Specifications)

### `/account`

* Your account should have a `post` method. So you can use a controller called
  something like `accountCreate` to save your data through.
  #### **NOTE** We only want to `create` an account, no need to write a getter or even update the account total directly. When we call for data to see how much is left in our budget, we'll write a separate endpoint that aggregates that information for us. We want to keep our account total `'pure'` and unaffected by our queries.
  ### `/account`
