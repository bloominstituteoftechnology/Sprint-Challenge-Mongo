const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/category', {useMongoClient: true});

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true },
});

module.exports = mongoose.model('category', CategorySchema);