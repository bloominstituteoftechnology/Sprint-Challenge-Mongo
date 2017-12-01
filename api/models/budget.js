import mongoose from 'mongoose';


const BudgetSchema = new Schema ({
    title: {
        required: true,
        type: String
    },
    budgetAmount: {
        required: true,
        type: Number
    }
});

module.exports = mongoose.model("Budget", BudgetSchema);