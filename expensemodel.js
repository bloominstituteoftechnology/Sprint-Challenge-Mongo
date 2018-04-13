

/*
Expense

    An expense is a purchase one would make that will affect one's budget.
    There will be two relationships tied to an expense, the budget it effects, & category it belongs to.
    An expense object when saved to the database would look something like this:

{
  _id: ObjectId('503c2b66bcf86cs793443564'),
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
}

const mongoose = require('mongoose');

const ObjectId =mongoose.Schema.Types.

  _id: '503c2b66bcf86cs793443564',
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
}
*/
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const expense = mongoose.Schema({
	amount: Number,
	description: String,
	category: {type: ObjectId, ref categories},
});

module.exports =mongoose.model('expense', expense);