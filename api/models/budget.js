const Mongoose = require('mongoose');

const Schema = ({
    title: {
        type: String,
        required: true,
    },
    budgetAmount: {
        type: Number,
        required: true,
    }
});

module.exports = Mongoose.model('Budget', Schema);