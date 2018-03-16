const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const BudgetSchema = mongoose.Schema({
  _id: ObjectId,
  title: String,
  budgetAmount: Number
});

module.exports = mongoose.model('BudgetModels', BudgetSchema)
