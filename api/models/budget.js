const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema(
    {
        title:String,
        budgetAmount :{
            type : Number,
            required: true
        }
    }
)
module.exports = mongoose.model('Budget', budgetSchema);