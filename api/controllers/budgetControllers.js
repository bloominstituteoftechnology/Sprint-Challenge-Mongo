const Budget = require('../models/budget');
const Expense = require('../models/expense');

const BudgetController = {
    create: async (req, res) => {
        try {
            const { title, budgetAmount } = req.body;
            const budget = await new Budget({ title, budgetAmount }).save();
            res.json(budget);
        } catch (error) {
            console.log('BudgetController@create: ', error);
            res.status(422).json({ error });
        }
    },
    getSummary: async (req, res) => {
        try {
            const { id } = req.params;
            const budget = await Budget.findById(id).exec();
            const expenses = await Expense.aggregate([
                { $match: { budget: budget._id } },
                { $group: { _id: budget._id,  total: { $sum: '$amount' } }
                }
            ]).exec();
            
            const { total } = expenses[0];
            const { budgetAmount } = budget;
            res.json({ budgetLeft: budgetAmount - total})
        } catch (error) {
            console.log('BudgetController@getSummary', error);
        }
    }
};

module.exports = BudgetController;
