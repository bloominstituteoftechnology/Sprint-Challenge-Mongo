const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectI;

const budgetModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budgetAmount: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model('budgetModel', budgetModel)