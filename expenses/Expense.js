const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const Expense = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  budget: {type: ObjectId, ref: "Character" },
  category: {type: ObjectId, ref: "Specie" }
});

module.exports = mongoose.model('Expense', Expense);
