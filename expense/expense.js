const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


const definition = {
        amount: {
            type: Number, 
            required: true
        },
        description: {
            type: String,
            required: true
        },
        budget: {
            type: ObjectId,
            ref: 'Budget'
        },
        category: {
            type: ObjectId, 
            ref: 'Category'
        }
}

const options = {
    timestamps: true
}

const expenseSchema = new Schema(definition, options);

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = mongoose.model('Expense', Expense);