/*
Category

    A category collection will consist of different places you can assign your expenses to.
    A category can be something as simple as groceries.
    Your relationship to consider here is the relationship between Expenses and Categories
    An example of a category object after it is saved to the databse:

{
  _id: ObjectId('543d2c72gsb23cd657438921'),
  title: 'Groceries',
}





*/
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
const categories = {
	Hobbies: {
  type:String,
},
	Wal-Mart:{
    type:String,
  },
	Gas: {
    type:String,
},
	Rent/Utilities: {
    type: String,
  }
},
});

const categorymodel = mongoose.model('Categories, categorySchema')
module.export= categorymodel;








/*{
  _id: '543d2c72gsb23cd657438921',
  title: 'Groceries',
}
*/


module.exports =categorymodel;