const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget_id: {
        type: ObjectId,
        require: true,
    },
    category_id: {
        type: ObjectId,
        require: true,
    },
    budget: [{ type: ObjectId, ref: "Budget" }],
    category: [{ type: ObjectId, ref: "Category" }],
});

module.exports = mongoose.model("Expense", expenseSchema);
