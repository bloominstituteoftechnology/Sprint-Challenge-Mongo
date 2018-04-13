//importing necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a new schema
const ExpenseSchema = new Schema({
    amount:{
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    budget: {
        type: Schema.Types.ObjectId,
        ref: "BudgetModel",
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "CategoryModel",
    },
})

//exporting the schema as a model and naming the collection
module.exports = mongoose.model("ExpenseModel", ExpenseSchema, "Expenses");