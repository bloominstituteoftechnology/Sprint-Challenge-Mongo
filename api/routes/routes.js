const { budgetCreate } = require('../controllers/budgetControllers');

module.exports = (app) => {
  app.post('/budget', budgetCreate);
};
