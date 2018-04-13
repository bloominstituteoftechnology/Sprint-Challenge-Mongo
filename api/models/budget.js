const mongoose = require('mongoose');

mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

const BudgetSchema = new mongoose.Schema({
	budget: {
		title: { 
            type: String, 
            required: true, 
            default: 'Budget' 
        },
		budgetAmount: Number
	}
});