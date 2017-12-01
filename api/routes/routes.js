import { newBudget } from '../controllers/budgetControllers';
import { addCategory, createCategory } from '../controllers/categoryControllers';
import { createExpense, addCategory } from '../controllers/expenseControllers';

module.exports = app => {
  const routes = (app) => {
  	app.route('/budget').post(newBudget);
  	app.route('/category').post(addCategory).get(getCategories);
  	app.route('/expense').post(addCategory).get(createExpense);
  };
}
