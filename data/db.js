const mongoose = require('mongoose');

module.exports = {
	connectTo: function(database = 'mongosprint', host = 'localhost') {
		return mongoose.connect(`mongodb://${host}/${database}`);
	},
};