const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    budgetAmount: {
        type: Number,
        require: true,
        trim: true,
    },
});

module.exports = mongoose.model("BudgetModel", BudgetSchema, "Budget");
