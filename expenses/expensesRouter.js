const express = require('express');
const router = express.Router();

const Expense = require('./Expense.js');

router.route('/')
  .get(async (req, res) => {
    try {
      const expenses = await Expense.find({}).populate('budget category');
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: "The server has failed you" });
    }
  })
  .post(async (req, res) => {
    try {
      let expense = new Expense(req.body);
      await expense.save();
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ error: "The server has failed you" });
    }
  });

module.exports = router;
