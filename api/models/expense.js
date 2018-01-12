const monogoose = require('mongoose');

const ExpenseSchmea= new mongoose.Schema ({
    
        amount: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        
        budget: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Budget' }],
        
        category:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
        
      });

      module.exports = mongoose.model('Expense', ExpenseSchema);
})