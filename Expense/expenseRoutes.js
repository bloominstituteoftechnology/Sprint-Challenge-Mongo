const Router = require('express').Router()
const Expenses = require('./expenses')

Router.post('/',(req,res) => {
    Expenses.create(req.body,(err,newExpense)=>{
        if (err) res.status(500).json(err)
        res.status(202).json(newExpense);
    })
})

module.exports = Router;