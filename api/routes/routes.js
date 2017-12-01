const budgetControllers = require('../controllers/budgetControllers');
const categoryControllers = require('../controllers/categoryControllers');
const expenseControllers = require('../controllers/expenseControllers');

module.exports = app => {
  app.route('/budget').post(budgetControllers.budgetCreate);

  app.route('/category')
  	.post(categoryControllers.categoryCreate)
  	.get(categoryControllers.getAllCategories);

  	app.route('/expense')
  		.post(expenseControllers.expenseCreate)
  		.get(expenseControllers.getAllexpenses);




  // app.route('/budget').post(budgetControllers.userCreate);
  // app.route('/login').post(userControllers.userLogin);
  // app.route('/new-post').post(postControllers.postCreate);
  // app.route('/posts').get(postControllers.postsGetAll);
  // app
  //   .route('/posts/:id')
  //   .get(postControllers.postGetById)
  //   .put(postControllers.postCommentAdd);
};