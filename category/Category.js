const mongoose = require('mongoose');

const Category = mongoose.Schema({
//data here
}); 





//module export
module.exports = mongoose.model('Category', Category, 'categories');