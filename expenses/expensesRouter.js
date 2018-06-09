const router = require('express').Router();
const Expense = require('./Expense.js');
const Budget = require('../budget/Budget.js')

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router.route('/').get(get).get(total).post(post)

function get (req, res) {    
    Expense.aggregate([{ $group: { _id : "$budget", totalExpenses: { $sum: "$amount" }
        }}]).then(total => {
        Expense.find()    
        .populate('category', {_id: 0, __v: 0})
        .populate('budget', {__v: 0, _id: 0})
        .select('-__v')
        .then(expense => {
            let expenses = Object.assign({}, expense, { total })
                res.status(200).json({expenses})
        })
            .catch(err => sendUserError(500, err.message, res))})
        .catch(err => sendUserError(500, err.message, res))
    }

function post (req, res) {
    const expenseData = req.body
    const { amount, description, budget, category } = req.body
    const newExpense = new Expense(expenseData)
    if (!amount || !description || !budget || !category) {
        sendUserError(400, "Please provide a title, description, budget ID, and category ID.", res)
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
        
router.route('/totals').get(total)

function total (req, res) {
    Expense.aggregate([{ $group: { _id : "$budget", totalExpenses: { $sum: "$amount" }
}}]).then(total => {
    Expense.find()    
    .populate('category', {_id: 0, __v: 0})
    .select('-__v')
    .then(expense => {
        let expenses = Object.assign({}, expense, { total })
            res.status(200).json({expenses})
    })
        .catch(err => sendUserError(500, err.message, res))})
    .catch(err => sendUserError(500, err.message, res))
}



router.route('/:id').get(getId).delete(deleteId).put(updateId)

function getId (req, res) {
    const { id } = req.params;
    Expense.aggregate([{ $group: { _id : "$budget", totalExpenses: { $sum: "$amount" }
        }}]).then(total_of_expenses => {
        Expense.findById(id)
        .populate('budget', {_id: 0, __v: 0})
        .populate('category', {_id: 0, __v: 0}) 
        .select('-__v -_id')
            .then(expense => {
                if (expense !== null) {
                res.status(200).json({ expense, total_of_expenses  })
            } else {
                sendUserError(404, "This expense is no longer in our database.", res)
            }})
            .catch(err => sendUserError(500, err.message, res))
        }).catch(err => sendUserError(500, err.message, res))
}

function deleteId (req, res) {
    const { id } = req.params
    Expense.findByIdAndRemove(id)
    .then(deletedExpense => {
        if (deletedExpense !== null) {
            res.json({ deletedExpense })
        } else {
        sendUserError(404, "This expense has already been removed", res)
    }})
    .catch(err => {
        sendUserError(500, err.message, res)
    })
}

function updateId (req, res) {
    const { id } = req.params;
    const updates = ( title ) = req.body
    Expense.findByIdAndUpdate(id, updates, { new: true })
        .then(updatedExpense => {
            res.status(200).json({ updatedExpense })
        })
        .catch(err => {
            sendUserError(500, err.message, res)
        })
}

module.exports = router