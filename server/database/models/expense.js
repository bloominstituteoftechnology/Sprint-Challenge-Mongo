// * This is the expense schema


// {
//     _id: ObjectId( '503c2b66bcf86cs793443564' ),
//         amount: 35,
//             description: 'potatoes',
//                 budget: ObjectId( '507f1f77bcf86cd799439011' ), // Monthly Spending
//                     category: ObjectId( '543d2c72gsb23cd657438921' ) // Groceries
// }


const mongoose = require( 'mongoose' );
const ObjectId = mongoose.Schema.Types.ObjectId;

const Character = mongoose.Schema( {
    name: { type: String, required: true },
    edited: Date,
    created: Date,
    gender: String,
    height: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    key: { type: Number, unique: true },
    homeworld_key: Number,
    homeworldId: { type: ObjectId, ref: 'Planet' },
} );

module.exports = mongoose.model( 'Character', Character );
