module.exports = {
  budgetTitle: {
    status: 400,
    message: 'You must include a title when creating a budget'
  },
  budgetAmount: {
    status: 400,
    message: 'You must include a budgetAmount when creating a budget'
  },
  categoryTitle: {
    status: 400,
    message: 'You must provide a title when creating a category'
  },
  expenseAmount: {
    status: 400,
    message: 'You must include an expenseAmount when creating an expense'
  },
  expenseDescription: {
    status: 400,
    message: 'You must include a description when creating an expense'
  },
  expenseMissingBudget: {
    status: 400,
    message: 'You must include a budget ID when creating an expense'
  },
  expenseMissingCategory: {
    status: 400,
    message: 'You must include a category ID when creating an expense'
  },
  expenseInvalidBudget: {
    status: 404,
    message: 'Budget with the given ID not found'
  },
  expenseInvalidCategory: {
    status: 404,
    message: 'Category with the given ID not found'
  },
  server: {
    status: 500,
    message: 'Internal server error'
  }
}