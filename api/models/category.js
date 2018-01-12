const Mongoose = require('mongoose');

const Schema = ({
    title: {
        type: String,
        unique: true,
        required: true,
    },
});

module.exports = Mongoose.model('Category', Schema);