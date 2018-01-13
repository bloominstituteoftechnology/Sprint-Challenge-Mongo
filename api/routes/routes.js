const { budgetCreate } = require('../controllers/budgetControllers');
const { categoryCreate, categoryList } = require('../controllers/categoryControllers');
const { expenseCreate, budgetSummary, expenseAggregation } = require('../controllers/expenseControllers')

module.exports = server => {
  // Todo: Fill in your routes here
  server.get('/',(req, res)=>{
    res.status(200).send('<h1>Victory</h1>')
    console.log('Victory');
  })

  server.route('/budget').post(budgetCreate);
  server
    .route('/category')
      .post(categoryCreate)
  server
    .route('/category')      
      .get(categoryList );
  server
    .route('/expense')
      .post(expenseCreate );
  server
    .route('/budget/:id/summary')
      .get(budgetSummary)
  server 
    .route('/expenses') 
      .get(expenseAggregation)
};
