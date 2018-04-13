const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const categoryModel = mongoose.model("category",categorySchema);

const catetoryModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
        },
    
    _id:{
       type: ObjectId,
       required:true
    }
})
module.exports = categoryModel;