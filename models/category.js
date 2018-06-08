const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    minlength: [1, 'Please include a title for your category'],
    maxlength: [128, 'The category title may not exceed 128 characters']
  }
});

categorySchema.plugin(uniqueValidator);

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;