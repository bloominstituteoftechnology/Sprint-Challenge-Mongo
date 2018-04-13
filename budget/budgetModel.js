const mongoose = require("mongoose");

const budgetSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Budget", budgetSchema);
