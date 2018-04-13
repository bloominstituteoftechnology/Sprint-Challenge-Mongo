const mongoose = require('mongoose');

module.exports = {
	connectTo: function(database = 'trackbudget', host = 'localhost') {
		return mongoose.connect(`mongodb://${host}/${database}`);
	},
};
