const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = mongoose.Schema({
    // _id: ObjectId('507f1f77bcf86cd799439011'),
    title: { type: String, required: true },
    budgetAmount: { type: Number, required: true }        
})

module.exports = mongoose.model('Budget', Budget);
