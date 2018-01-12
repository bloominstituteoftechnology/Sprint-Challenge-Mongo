const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Category', CategorySchema);
