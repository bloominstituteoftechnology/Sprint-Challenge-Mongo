const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Category = mongoose.Schem({
    _id: ObjectId('543d2c72gsb23cd657438921'),
    title: 'Groceries',
})

module.exports = mongoose.model('Category', Category);