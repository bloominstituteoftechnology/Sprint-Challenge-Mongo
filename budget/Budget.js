const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Budget = new mongoose.Schema({
  title: {
    type: String,
  },
  budgetAmount: {
    type: Number,
  }
})


module.exports = mongoose.model('BudgetModel', Budget);
