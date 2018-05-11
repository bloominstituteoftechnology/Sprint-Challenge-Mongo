const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },
    title: { type: String, required: true },
    key: { type: Number, unique: true },
    budgetAmount: [Number]
});
