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
  server: {
    status: 500,
    message: 'Internal server error'
  }
}