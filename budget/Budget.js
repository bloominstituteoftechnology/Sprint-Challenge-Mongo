const mongoose = require('mongoose'); 
const ObjectId = mongoose.Schema.Types.ObjectId;

// {
//     _id: ObjectId('507f1f77bcf86cd799439011'),
//     title: 'Budget',
//     budgetAmount: 3000,
// }

const Budget = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    budgetAmount: {
        type: Number,
        required: true
    },
    key: {
        type: Number, 
        unique: true  
    }, 
});

module.exports = mongoose.model('Budget', Budget); 
