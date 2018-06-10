const router = require('express').Router();
const budgetdb = require('./buget')


router.post('/',(req,res) => {
    const {title,budgetAmount} = req.body
    budgetdb.create({title,budgetAmount},(err,budget) => {
        if (err) res.status(500).send({err});
        res.status(202).json(budget)
    })
})


module.exports = router;