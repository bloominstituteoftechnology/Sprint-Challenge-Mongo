import { addBudget } from '../controllers/budgetControllers';
import { addCategory, getCategories } from '../controllers/categoryControllers';
import { addExpense, getExpenses } from '../controllers/expenseControllers';

const routes = (app) => {
	app.route('/budget').post(addBudget);
	app.route('/category').post(addCategory).get(getCategories);
	app.route('/expense').post(addExpense).get(getExpenses);
}

export default routes;