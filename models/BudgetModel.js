const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
   title: String,
   budgetAmount: Number,
});

module.exports = mongoose.model('Budget', BudgetSchema);