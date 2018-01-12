const Expense = require('../models/expense')
module.exports = createExpense = (req, res) => {
     const {amount, description, budgetId, categoryId} = req.body
     const expense = new Expense()
     expense.save({amount, description, budget: budgetId, category: categoryId })
       .then(
           (results) => {
               // do something here are results
               res.status(200).json(results)
               console.log('user created expense');
           }
       )
       .catch((err) => {
        //do something theres be an error
        res.status(500).json(err)
        console.log('problem creating new expense');
    })
}
