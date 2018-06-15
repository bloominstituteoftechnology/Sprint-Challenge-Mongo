const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;

const CategoryModel =  mongoose.Schema( {
    //     _id: ObjectId( '543d2c72gsb23cd657438921' ),
    title: {
        type: String,
        unique: true,
        require: true,
    }
    });
module.exports = mongoose.model( 'CategoryModel', CategoryModel );
