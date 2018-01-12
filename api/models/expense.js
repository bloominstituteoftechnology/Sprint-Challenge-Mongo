const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/expense', {useMongoClient: true});

const ExpenseSchema = new mongoose.Schema({
    amount: { type: Number, required: true},
    description: { type: String, required: true },
    budget: { type: mongoose.Schema.Types.ObjectId, ref: 'budget' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'category'}
});

module.exports = mongoose.model('expense', ExpenseSchema);