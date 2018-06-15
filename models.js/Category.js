const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = newSchema({
  _id: ObjectId('543d2c72gsb23cd657438921'),
  title: 'Groceries'
});

module.exports = mongoose.model('Category', Category);