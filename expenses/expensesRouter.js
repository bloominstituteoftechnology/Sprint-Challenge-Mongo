const router = require('express').Router();
const Expense = require('./expense.js');

const userErr = (status, message, res) => {
    res.status(status).json({error: message});
    return;
};

router.route('/').get(get).post(post)

function get (req, res) {
    Expense.find()
        .populate('budget', {_id: 0, __v: 0})
        .populate('category', {_id: 0, __v: 0})
        .select('-_v')
        .then(expense => {
            res.status(200).json({expense})
        })
        .catch(err => userErr(500, err.message, res))
}

function post (req, res){
    const expenseDb = req.body
    const {amount, description, budget, category} = req.body
    const newExpense = new Expense(expenseDb)
    if(!amount || !description){
        userErr(400, "Please provide both title and description.", res)
    } else{
        newExpense
            .save()
            .then(savedExpense => {
                res.status(201).json({savedExpense})
            })
            .catch(err => {
                userErr(500, err.message, res)
            })
    }
}
module.exports = router;