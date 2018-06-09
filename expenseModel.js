const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types


const ExpenseSchema = new mongoose.Schema ({
   amount: Number,
   description: String,
   budget: {
       type: ObjectId,
       ref: 'budgetModel'
   },

   
   category: {
       type: ObjectId,
       ref: 'categoryModel'
   }
})


module.exports = mongoose.model('expenseModel', ExpenseSchema);