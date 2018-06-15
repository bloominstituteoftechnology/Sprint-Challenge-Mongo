const mongoose = require("mongoose");

const schemaDef = {
    amount: {
        type:Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
     }, // Monthly Spending
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    } // Groceries for example
}

const options = {
    timestamps:true
};

const expenseSchema = new mongoose.Schema(schemaDef, options);

const expenseModel = mongoose.model("Expense", expenseSchema, "expenses");

module.exports = expenseModel;