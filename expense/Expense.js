const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
  _id: '503c2b66bcf86cs793443564',
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
  key: { type: Number, unique: true }
});

module.exports = mongoose.model('Expense', Expense);
/*
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Starship = new mongoose.Schema({
  pilot_keys: [Number],
  mglt: String,
  starship_class: String,
  hyperdrive_rating: String,
  key: { type: Number, unique: true },
  // add pilots field to lik the ship to the characters model
});

module.exports = mongoose.model('Starship', Starship);
*/