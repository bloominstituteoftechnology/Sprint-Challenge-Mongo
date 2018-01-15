const mongoose = require('mongoose');
const Budget = require('../models/budget.js');

module.exports.budgetCreate = (req, res) => {
	const budget = new Budget({
		_id: mongoose.Schema.Types.ObjectId(req.body.ObjectId),
		title: 'title',
        budgetAmount: 'budgetAmount'
	});

	budget
	  .save()
	  .then((budget) => {
	  	res.status(200).json(budget);
	  })
	  .catch((error) => {
	  	res.status(500).json({ message: 'Server Error!'}, error);
	  });
};
