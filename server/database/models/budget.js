// * This is the budget schema


// {
//     _id: ObjectId( '507f1f77bcf86cd799439011' ),
//         title: 'Budget',
//             budgetAmount: 3000,
// }
const mongoose = require( 'mongoose' );

const Budget = new mongoose.Schema( {
    title: String,
    budgetAmount: Number,
} );

module.exports = mongoose.model( 'Budget', Budget );
