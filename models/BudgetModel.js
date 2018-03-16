const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
   _id: {
      type: ObjectId,
      required: true
   },
   title: String,
   budgetAmount: Number,
});

module.exports = mongoose.model('Budget', BudgetSchema);