// {
//   _id: '503c2b66bcf86cs793443564',
//   amount: 35,
//   description: 'potatoes',
//   budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
//   category: ObjectId('543d2c72gsb23cd657438921') // Groceries
// }
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
