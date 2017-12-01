const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    newBudget.save(newBudget, (err, savedBudget) => {
        if(err) { res.status(500).json(err); return};
        res.json(savedBudget);
    });
};

// const budgetGetAll = (req, res) => {
//     Budget.find({})
//     .select('title')
//     .exec()
//     .then(budgets => {
//         if (budget.length === 0) throw new Error();
//         res.json(budgets);
//     })
//     .catch(err => res.status(422).json(err));
// };

// const budgetGetById = (req, res) => {
//     const { id } = req.params;
//     Budget.findById(id)
//     .populate('title budgetAmount') //not sure about this line
//     .exec()
//     .then(singleBudget => {
//         if(singleBudget === null) throw new Error();
//         res.json(singleBudget);
//     })
//     .catch(err => res.status(422).json(err));
// };

module.exports = {
    budgetCreate,
    budgetGetAll,
    budgetGetById
};