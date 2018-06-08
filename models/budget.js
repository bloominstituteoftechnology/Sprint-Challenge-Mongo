const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please include a title for your budget'],
    unique: true,
    minlength: [1, 'Please include a title for your budget'],
    maxlength: [128, 'Titles may not exceed 128 characters']

  },
  budgetAmount: {
    type: Number,
    required: [true, 'Please include a budgetAmount for your budget'],
    min: [1, 'The budgetAmount must be greater than 0']
  }
});

budgetSchema.plugin(uniqueValidator);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;