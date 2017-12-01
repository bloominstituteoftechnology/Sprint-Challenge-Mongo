module.exports = app => {
  app.route('/budget').post(controller.newBudget);
  app
    .route('/category')
    .post(controller.newCategory)
    .get(controller.returnCategories);
  app
    .route('/expense')
    .post(controller.newExpense)
    .get(controller.returnExpenses);
  // app.route('/budget/:id/summary')
  // app.route('/expenses?aggregatedBy=category')
};
