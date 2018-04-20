const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title.']
    },
    createdOn: {
        type: String,
        required: true,
        default: new Date(),
    }
});

module.exports = mongoose.model('categories', CategorySchema);