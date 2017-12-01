const Expense = require('../models/expense');

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
    }
};

module.exports = ExpenseController;