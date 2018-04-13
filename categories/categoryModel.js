const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema ({

})

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;