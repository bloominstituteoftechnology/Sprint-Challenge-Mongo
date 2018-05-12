import express from 'express'; // remember to install your npm packages
import helmet from 'helmet';
import mongoose from 'mongoose';

import { BudgetModel } from './models/budget';
import { CategoryModel } from './models/category';
import { ExpenseModel } from './models/expense';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected'))
  .catch(err => console.error(err));

const server = express();

// add your server code

server.use(helmet());
server.use(express.json());

const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(e => next(e));

const asyncRouteGenerator = fn => asyncHandler(fn);

const budgetsPostRoute = async (req, res, next) => {
  const { body } = req;
  // validate body
  const newBudget = await new BudgetModel(body).save();
  await res.json(newBudget);
};

server.post('/budgets', asyncRouteGenerator(budgetsPostRoute));

const categoriesPostRoute = async (req, res, next) => {
  const { body } = req;
  // validate categories
  const newCategory = await new CategoryModel(body).save();
  await res.json(newCategory);
};

server.post('/categories', asyncRouteGenerator(categoriesPostRoute));

const categoriesGetAllRoute = async (req, res, next) => {
  const categories = await CategoryModel.find()
    .select('title')
    .exec();
  await res.json(categories);
};

server.get('/categories', asyncRouteGenerator(categoriesGetAllRoute));

const expensesPostRoute = async (req, res, next) => {
  const { budget, category, description, amount } = req.body;

  const expense = await new ExpenseModel({
    budget,
    category,
    description,
    amount
  }).save();
  res.json(
    await expense
      .populate('category')
      .populate('budget')
      .execPopulate()
  );
};

server.post('/expenses', asyncRouteGenerator(expensesPostRoute));

const expensesGetAllRoute = async (req, res, next) => {
  const expenses = await ExpenseModel.find()
    .populate('category')
    .populate('budget')
    .exec();
  res.json(expenses);
};

server.get('/expenses', asyncRouteGenerator(expensesGetAllRoute));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
