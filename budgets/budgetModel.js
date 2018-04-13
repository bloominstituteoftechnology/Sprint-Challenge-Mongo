const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const budgetModel = mongoose.model("budgets",budgetSchema);

const budgetModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
        },
    budgetAmount: {
        type:Number,
        required:true

    },
    _id:{
       type: ObjectId,
       required:true
    }
})
module.exports = budgetModel;