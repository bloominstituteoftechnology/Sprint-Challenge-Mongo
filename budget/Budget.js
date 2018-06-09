const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;



const definition = {
    title: {
        type: String,
        required: true
    },
    budgetAmount: { 
        type: Number,
        required: true
}
}
const BudgetSchema = new mongoose.Schema(definition)

module.exports = mongoose.model('Budget', BudgetSchema)