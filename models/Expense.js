

  const ExpenseSchema = new mongoose.Schema ({
    
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget',
    },
    category: {
         type: ObjectId, 
         ref: 'Category' 
     }]
});
 module.exports = mongoose.model('Expense', ExpenseSchema);
