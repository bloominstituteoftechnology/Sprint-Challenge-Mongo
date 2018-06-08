const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


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

const options = {
    timestamps: true
};

const budgetSchema = new Schema(definition, options);

const budgetModel = mongoose.model('Budget', budgetSchema); // name of collection will default to budgets

module.exports = mongoose.model('Budget', Budget);