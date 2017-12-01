const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryCreate = Schema ({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category', categoryCreate);