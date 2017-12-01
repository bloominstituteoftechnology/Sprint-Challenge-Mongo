const Budget = require('../models/budget');

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
};

module.exports = BudgetController;

