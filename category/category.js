const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = new mongoose.Schema({
  amount: Number,
  desciption: String,
  budget: { type: ObjectId, ref: 'Budget' },
  category: { type: ObjectId, ref: 'Category' }
});
