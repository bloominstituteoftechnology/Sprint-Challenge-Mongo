module.exports = app => {
  app.route('/budget').post(controller.makeBudget);
  app
    .route('/category')
    .post(controller.makeCategory)
    .get(controller.returnCategories);
  app
    .route('/expense')
    .post(controller.makeExpense)
    .get(controller.returnExpenses);
  // app.route('/budget/:id/summary')
  // app.route('/expenses?aggregatedBy=category')
};
