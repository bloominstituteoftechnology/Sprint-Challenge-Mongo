const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Expense = new mongoose.Schema({
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },
    key: { type: Number, unique: true },
    title: { type: String, required: true },
});

