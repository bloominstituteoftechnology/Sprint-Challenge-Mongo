const mongoose = require('mongoose');
const Objectid = mongoose.Types.ObjectId;


const Budget = mongoose.Schema({
  title: String,
  budgetAmount:Number
});

module.exports = mongoose.model('Budget',Budget);
