const mongoose = require(`mongoose`);
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
    },
    category: [{ type: ObjectId, ref: 'Category' }],
    budget: [{ type: ObjectId, ref: 'Budget' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model(`Expense`, Expense);
