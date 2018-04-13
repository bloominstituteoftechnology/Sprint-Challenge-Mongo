const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const budgetSchema = new mongoose.Schema({
  id: {
    type: ObjectId,
    ref: '',
  },
  title: {
    type: String,
    default: 'Budget',
  },
  budgetAmount: {
    type: Number,
  },
});

const budgetModel = mongoose.model('Budget', budgetSchema);

module.exports = budgetModel;
