//importing necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a new schema
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

//exporting the schema as a model and naming the collection
module.exports = mongoose.model("BudgetModel", BudgetSchema, "Budget");
