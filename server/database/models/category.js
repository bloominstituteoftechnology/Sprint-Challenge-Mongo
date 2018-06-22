// * This is the category schema


// {
//     _id: ObjectId( '543d2c72gsb23cd657438921' ),
//         title: 'Groceries',
// }
const mongoose = require( 'mongoose' );

const Category = new mongoose.Schema( {
    title: String,
} );

module.exports = mongoose.model( 'Category', Category );
