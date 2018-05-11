const mongooose = require('mongoose');

const Category = mongoose.Schema({

});

module.exports = mongoose.model('Category', Category, 'categories');