const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId; 

const Expense = mongoose.Schema({
//data here
});





//module export
module.exports = mongoose.model('Expense', Expense);