const mongoose = require('mongoose');

const Budget = new mongoose.Schema({ // new schema 
    title: { 
        type: String,
        required: true
    },
    budgetTotal: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Budget', Budget);