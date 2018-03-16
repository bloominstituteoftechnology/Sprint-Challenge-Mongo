const mongoose = require('mongoose');

mongoose.models = {};
mongoose.modelSchemas = {};

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/budget', { useMongoClient: true });

const BudgetSchema = new mongoose.Schema({
	expense: {
		amount: { 
            type: Number, 
            required: true 
        },
		description: String,
		budget: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'budget' 
        },
		category: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'category', 
            default: 'uncategorized' }
	}
});