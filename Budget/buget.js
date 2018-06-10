const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;


const budgetSchema = new Schema({
    title : {type:String,required:true},
    budgetAmount: {type:Number, required:true}
})

const Budget = Mongoose.model('Budget',budgetSchema);

module.exports = Budget;