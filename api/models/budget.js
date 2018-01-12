const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/budget', {useMongoClient: true});

const BudgetSchema = new mongoose.Schema({
    title: { type: String, required: true },
    budgetAmount: { type: Number, required: true}
});

module.exports = mongoose.model('budget', BudgetSchema);