const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    title: String,
    expense: {
        type: Schema.Types.ObjectId,
        ref: 'Expense'
    }
});

module.exports = mongoose.model('Category', CategorySchema);