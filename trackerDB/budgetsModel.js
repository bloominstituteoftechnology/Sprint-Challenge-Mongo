const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const definition = {
  title: String,
  budgetAmount: String
};
const option = {
  timestamps: true,
  strict: false
};

const budgetSchema = new Schema(definition, option);
const budgetsModel = mongoose.model("Budget", budgetSchema, "budgets");
module.exports = budgetsModel;
