const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    index: true, 
    title: String, 
}); 



module.exports = mongoose.model('Category', CategorySchema);