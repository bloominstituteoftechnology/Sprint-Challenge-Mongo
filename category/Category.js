const mongoose = require('mongoose'); 
const ObjectId = mongoose.Schema.Types.ObjectId;

// {
//     _id: ObjectId('543d2c72gsb23cd657438921'),
//     title: 'Groceries',
// }

const Category = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
});

module.exports = mongoose.model('Category', Category); 
