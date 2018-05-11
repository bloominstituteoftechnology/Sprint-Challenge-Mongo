const mongoose = require('mongoose');

const Budget = mongoose.Schema({
    // Insert Data Here
});

// Module Export
module.exports = mongoose.model('Budget', Budget);