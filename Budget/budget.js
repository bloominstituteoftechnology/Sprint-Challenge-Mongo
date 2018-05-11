const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    _id: { type: ObjectId},
    title: {type: String, required: true},
    budgetAmmount: {type: Number, required: true}

})

module.exports = mongoose.model('Budget', Budget)