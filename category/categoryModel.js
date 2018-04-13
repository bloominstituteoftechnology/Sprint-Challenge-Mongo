const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Type.ObjectId;

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  expense: [{ type: ObjectId, ref: 'Expense' }],
  category: [{ type: ObjectId, ref: 'Category' }]
});

module.exports = mongoose.model('Category', categorySchema);
