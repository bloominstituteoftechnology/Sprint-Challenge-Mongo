const mongooose = require('mongoose');
const ObjectId = mongooose.Schema.Types.ObjectId;

const Expense = mongoose.Schema({

});

module.exports = mongoose.model('Expense', Expense);