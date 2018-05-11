const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const definition = {
  amount: { type: String, require: true },
  budget: {
    type: ObjectId,
    ref: "Budget"
  },
  category: {
    type: ObjectId,
    ref: "Category"
  }
};
const option = {
  timestamps: true,
  strict: false
};

const expenseSchema = new Schema(definition, option);
const expensesModel = mongoose.model("Expense", expenseSchema, "expenses");
module.exports = expensesModel;
