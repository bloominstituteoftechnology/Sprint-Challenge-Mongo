const budgetCreate = require('../controllers/budgetControllers')
const {categoryCreate, categoryList} = require('../controllers/categoryControllers')
const {expenseCreate, expenseList} = require('../controllers/expenseControllers')

module.exports = server => {
  //Todo: Fill in your routes here
  server.post ('/budget', budgetCreate(req, res))
  server.post ('/category', categoryCreate)
  server.get ('/category', categoryList)
  server.post ('/expense', expenseCreate)
  server.get ('/expense', expenseList)
  server.get ('/budget/:id/summary', expensesAggregate)
  server.get ('/expenses?aggregatedBy=category'), expensesCategoryAggregate)
}