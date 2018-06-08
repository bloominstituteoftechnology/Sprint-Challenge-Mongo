const mongoose = require('mongoose');

module.exports = {
    connectTo: function(database = 'budgetTracker', host = 'localhost') {
        return mongoose.connect('mongodb://${host}/${database}');
    }
};