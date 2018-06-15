const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;

const Budget =  mongoose.Schema({
    //_id: ObjectId( '507f1f77bcf86cd799439011' ),

    title: {
        type: String,
        unique: true,
        require: true,
    },
        budgetAmount: {
            type: Number,
            default: 0,
        }
} );

module.exports = mongoose.model('budgetModel', Budget)
