const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = mongoose.Schema({
  _id: { type: ObjectId, ref: 'Budget' },
  title: { type: String, required: true },
  budgetAmount: { type: Number, required: true }
});

const budgetModel = mongoose.model('Budget', budgetSchema);
module.exports = budgetModel;
