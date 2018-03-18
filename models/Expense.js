

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

  const ExpenseSchema = new mongoose.Schema ({
    
    amount: {
        type: Number,
        default:0,
    },
    description: {
        type: String,
        index: true,
    },
    budget: {
        type: ObjectId,
        ref: 'Budget',
    },
    category: {
         type: ObjectId, 
         ref: 'Category' 
     }
});
 module.exports = mongoose.model('Expense', ExpenseSchema);
