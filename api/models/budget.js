const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb:/localhost/budget', { useMongoClient: true });

const BudgetSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    require: true,
  },
  budgetAmount: {
    type: Number,
    require: true,
  },
})

module. exports = mongoose.model('Budget', BudgetSchema);