const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = mongoose.Schema({
    amount: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        index: true,
    },
    budget: {
        type: ObjectId,
        ref: 'budgets',
    },
    category: {
        type: ObjectId,
        ref: 'categories',
    },
    createdOn: {
        type: String,
        required: true,
        default: new Date(),
    }
});

module.exports = mongoose.model('posts', PostSchema);
