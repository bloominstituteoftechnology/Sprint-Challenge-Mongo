const mongoose = require('mongoose');

const Budget = new mongoose.Schema({
//data here
    title: {
            type: String,
            required: true
        },
        budgetAmount: {
            type: Number,
            required: true
        }
    }, {timestamps: true});

//module export
module.exports = mongoose.model('Budget', Budget);