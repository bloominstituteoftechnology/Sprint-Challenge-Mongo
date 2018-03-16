/*### `POST to '/budget'`

* Used to save a new budget to the database.
* Only worry about creating `ONE` budget for now.

* **NOTE** We only want to `create` a budget, no need to write a getter or even
  update the budget total directly. When we call for data to see how much is
  left in our budget, we'll write a separate endpoint that aggregates that
  information for us. We want to keep our budget total `'pure'` and unaffected
  by our queries.
*/




{
  _id: ObjectId('507f1f77bcf86cd799439011'),
  title: 'Budget',
  budgetAmount: 3000,
}

module.exports =budgetmodel;