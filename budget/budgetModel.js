const mongoose = require("mongoose");

const schemaDef = {
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

const budgetSchema = new mongoose.Schema(schemaDef, options);

const budgetModel = mongoose.model("Budget", budgetSchema, "budgets");

module.exports = budgetModel;
