const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const expensesModel = mongoose.model("expense",expensesSchema);

const expensesModel = new mongoose.Schema({
    description:{
        type:String,
        required:true
        },
    amount: {
        type:Number,
        required:true

    },
    _id:{
       type: ObjectId,
       required:true
    },
    category:({type:ObjectId}),
    budget:({type:ObjectId})
})
module.exports = expensesModel;