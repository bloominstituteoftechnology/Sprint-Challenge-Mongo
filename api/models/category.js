const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types;

const CategorySchema = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model("Category", CategorySchema);
