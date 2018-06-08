const express = require('express');

const Expense = require('./expensesModel.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    // if (req.query.category) {
    //   Expense.find()
    //     .where({ category: new RegExp(req.query.category, "gi")})
    //     .populate("categories")
    //     .populate("budgets")
    //     .then(expense => {
    //       res.status(200).json(expense);
    //     })
    //     .catch(err => {
    //       res.status(500).json([{ error: err.message }]);
    //     })
    // }
    Expense.find()
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  })
  .post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });
    if (!amount || !description || !budget || !category) {
      res.status(400).json([{ error: "Missing required information for post." }]);
      return;
    };
    newExpense
      .save()
      .then(() => {
        Expense.find()
          .then(expenses => {
            res.status(200).json(expenses);
          })
          .catch(err => {
            res.status(500).json([{ error: err.message }]);
          })
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }])
      });
  });

// {
//   _id: ObjectId('503c2b66bcf86cs793443564'),
//     amount: 35,
//       description: 'potatoes',
//         budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
//           category: ObjectId('543d2c72gsb23cd657438921') // Groceries
// }

module.exports = router;