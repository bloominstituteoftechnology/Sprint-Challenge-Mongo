const router = require('express').Router();
const Expense = require('../models/expenseModel.js');

router
  .route('/')
  .get((req,res) => {
    //==>
    Expense.find(req.query)
      .populate('budget')
      .populate('category')
      .then(expense => res.json(expense))
      .catch(err => res.status(500).json(err => { error: err.message }));
  })
  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    if (!amount || !description || !budget || !category) {
      res.status(400).json({ error: "Fields 'amount', description', 'budget', and 'category' are required."});
      return;
    }
    if (typeof amount !== "number" || typeof description !== "string" || typeof budget !== "string" || typeof category !== "string") {
      res.status(400).json({ error: "Field 'amount' must be type 'number'. Field 'description', 'budget', and 'category' must be type 'string'."});
      return;
    }
    if (budget.length !== 24 || category.length !== 24) {
      res.status(400).json({ error: "Fields 'budget' and 'category' must be valid ID's (ObjectId) of the related documents."});
      return;
    }
    //==>
    Expense.create({ amount, description, budget, category })
      // .populate('budget')
      // .populate('category')
      .then(expense => res.status(201).json(expense))
      .catch(err => res.status(500).json(err => { error: err.message }));
  })

// router
//   .route('/:_id')
//   .get((req, res) => {
//     const { _id } = req.params;
//     //==>
//     Expense.aggregate([
//       { $match: { _id }},
//       { $group : {
        
//       }}
//     ])
//   })

module.exports = router;
/*
'/expenses'
  your expense should have a 'post' method for creating the expense. To save an expense you'll need an 'budget' _id and a 'category' _id so that we can build out a relationship between those other collections and our expenses.
  your expense route should also have a 'get' method that returns all the expenses with the populated data.
*/