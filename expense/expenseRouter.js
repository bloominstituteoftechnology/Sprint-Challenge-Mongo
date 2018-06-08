const express = require('express');
const Expense = require('./expenseModel.js');
const router = express.Router();



router
.route('/')
.get ((req, res) => {

Expense
.find()
.populate('budget', {_id: 0, __v: 0})
.populate('category', {_id: 0, __v: 0})
.select('-__v')
.then(expense => {
    res.status(200)
    res.json({ expense })
})
.catch(err => {
    res.status(500)
    res.json({ message: "Expenses could not be found."})
})
})

.post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense= new Expense({ amount, description, budget, category  });
if(!amount || !description || !budget || !category) {
    res.status(400)
    res.json({ message: "Expense amount, description, budget, or categories are missing." })
}
else {
newExpense
.save()
.then(expense => {
    res.status(200)
    res.json({ expense })
})
.catch(err => {
    res.status(500)
    res.json({ message: "Your new expense could not be created. "})
})
}})



module.exports = router