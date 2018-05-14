const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {type: ObjectId, ref: 'Budget'},
    category: {type: ObjectId, ref: 'Category'}
});

{
    {amount: 2000}
    {description: 'blah blah'}
    {budget: '5af5c5312496d84e79d78a09_id'}
    {category: '5af5c496fdca6571f15870c3_id'}
}
module.exports = mongoose.model('Expense', Expense)