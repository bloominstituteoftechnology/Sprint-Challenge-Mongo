
const BudgetSchema = new mongoose.Schema ({
  _id: {
      type: ObjectId,
      ref: 'Expense',
  },
  title: {
      type: String,
      required: true,
  },
  budgetAmount: {
      type: String,
      required: true,
  },
});
module.exports = mongoose.model('Budget', BudgetSchema);



