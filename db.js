//import mongoose, you'll need it.
const mongoose = require('mongoose');

module.exports = {
    connectTo: function(database = 'budgetTracker', host = 'localhost') {
        return mongoose.connect(`mongodb://${host}/${database}`);
    }
};