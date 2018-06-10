const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

/* OPTION A - w/DEFINITION VARIABLE
stores schema definition in a variable named 'definition' which is then referenced in a subsequent statement
*/
const Budget = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  budgetAmount: Number
})

module.exports = mongoose.model('Budget', Budget)

/*
OPTION A - w/DEFINITION VARIABLE
stores schema definition in a variable named 'definition' which is then referenced in a subsequent statement

const definition = {
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000
}

const options = {
timestamps: true
}
// code below declares the schema using the definition and options variables created beforehand.

const budgetSchema = mongoose.Schema(definition, options);

// generate the model.  The model turns the schema into a js object module.

module.exports = mongoose.model('Budget', budgetSchema);
//code above says: the model name is 'Budget' and every instance of 'Budget' must be validated by passing through the budgetSchema.

*/
