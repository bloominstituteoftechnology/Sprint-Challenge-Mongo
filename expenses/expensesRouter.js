const router = require('express').Router();
const Expense = require('./Expense.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router.route('/').get(get).post(post)

function get (req, res) {
    Expense.find()
        .populate('budget', {_id: 0, __v: 0})
        .populate('category', {_id: 0, __v: 0})
        .select('-__v')
    .then(expense => {
        res.status(200).json({ expense })
    })
    .catch(err => sendUserError(500, err.message, res))
}

function post (req, res) {
    const expenseData = req.body
    const { amount, description, budget, category } = req.body
    const newExpense = new Expense(expenseData)
    if (!amount || !description) {
        sendUserError(400, "Please provide a title for your category.", res)
    } else {
        newExpense
            .save()
            .then(savedExpense => {
                res.status(201).json({ savedExpense })
            })
            .catch(err => {
                sendUserError(500, err.message, res)
            })
    }
}

module.exports = router