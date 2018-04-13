const mongoose = require("mongoose");

const Expenses = new mongoose.Schema({


module.exports = mongoose.model("Expenses", Expenses);
