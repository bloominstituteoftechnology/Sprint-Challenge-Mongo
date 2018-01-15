const mongoose = require('mongoose');
const Expense = require('../models/expense.js');

module.exports.expenseCreate = (req, res) => {
	const expense = new Expense({
		amount: 'amount',
		description: 'description',
		budget: mongoose.Schema.Types.ObjectId(req.body.ObjectId),
		category: mongoose.Schema.Types.ObjectId(req.body.ObjectId)
	});

	expense
	  .save()
	  .then((budget) => {
	  	res.status(200).json(budget);
	  })
	  .catch((error) => {
	  	res.status(500).json({ message: 'Server Error!'}, error);
	  });
};
