const Budget = require('../models/budget.js');

const budgetCreate = (req, res) => {
	const { title, BudgetAmount } = req.body;
   
    const budget = new Budget();
    budget.save({ title, BudgetAmount })
      .then((results) => {
        res.status(200).json(results);
        console.log('budget has been saved!');
      })
      .catch((error) => {
        res.status(500).json(error);
        console.log('budget has not been saved due to a problem!');
      })
}

module.exports = budgetCreate;