const express = require('express'); // remember to install your npm packages

const server = express();

// add your server code

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});

// BUDGET shape
// {
//   _id: ObjectId('507f1f77bcf86cd799439011'),
//   title: 'Budget',
//   budgetAmount: 3000,
// }

// EXPENSE
// {
//   _id: ObjectId('503c2b66bcf86cs793443564'),
//   amount: 35,
//   description: 'potatoes',
//   budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
//   category: ObjectId('543d2c72gsb23cd657438921') // Groceries
// }

//CATEGORY
// {
//   _id: ObjectId('543d2c72gsb23cd657438921'),
//   title: 'Groceries',
// }