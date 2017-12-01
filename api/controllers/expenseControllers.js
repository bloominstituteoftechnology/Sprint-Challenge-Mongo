const mongoose = require("mongoose");

const Expense = require("../models/expense");
const Category = require("../models/category");
const Account = require("../models/account");

const STATUS_USER_ERROR = 422;

const newExpense = (req, res) => {
  const { amount, description, account, category } = req.body;
  const newExpense = new Expense({ amount, description, account, category });

  newExpense
    .save()
    .then(createdExpense => {
      res.json(createdExpense);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

const displayAllExpenses = (req, res) => {
  Expense.find()
    .select()
    .populate({
      path: "category",
      populate: { path: "category", select: "title" }
    })
    .populate({
      path: "account",
      populate: { path: "account", select: "title" }
    })
    .populate({
      path: "account",
      populate: { path: "account", select: "amount" }
    })
    .exec()
    .then(expenses => {
      if (expenses.length === null) throw new Error();
      res.json(expenses);
    })
    .catch(err => {
      res.status(STATUS_USER_ERROR).json({ err });
    });
};

module.exports = {
  newExpense,
  displayAllExpenses
};
