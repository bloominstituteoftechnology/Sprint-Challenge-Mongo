const { budgetCreate } = require('../controllers/budgetControllers');
const { categoryCreate, categoryGet } = require('../controllers/categoryControllers');

module.exports = (app) => {
  app.post('/budget', budgetCreate);

  app
    .route('/category')
    .post(categoryCreate)
    .get(categoryGet);
};
