const Expense = require('../models/expense');
const Category = require('../models/category');

const ExpenseController = {
    get: async (req, res) => {
        try {
            const expenses = await Expense.find({}).populate('budget').populate('category').exec();
            res.json(expenses);
        } catch (error) {
            console.log('ExpenseController@get: ', error);
            res.status(422).json({ error });
        }
    },
    create: async (req, res) => {
        try {
            const { amount, budget, category, description } = req.body;
            const expense = await new Expense({ amount, budget, category, description }).save();
            res.json(expense);
        } catch (error) {
            console.log('ExpenseController@create: ', error);
            res.status(422).json({ error });
        }
    },
    getExpenses: async (req, res) => {
        try {
            const { aggregatedBy } = req.query;
            if ( aggregatedBy !== 'category') {
                throw { message: 'We only support aggregation by category right now. Check back later!' }
            }
            const expenses = await Expense.aggregate([
                { $group: { _id: '$category', category: { $first: '$category' }, total: { $sum: '$amount'}}, },
            ]).then(categoryExpenses => Category.populate(categoryExpenses, { path: 'category', select: 'title'}));

            res.json(expenses);
        } catch (error) {
            console.log('ExpenseController@getExpenses: ', error);
            res.status(422).json({ error });            
        }
    }
};

module.exports = ExpenseController;