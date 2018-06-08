const router = require('express').Router();
const Budget = require('./budget.js');

const userErr = (status, message, res) => {
    res.status(status).json({error: message});
    return;
};
router.route('/').post(post)

function post (req, res){
    const budgetDb = req.body
    const {title, budgetAmount} = req.body
    const newBudget = new Budget(budgetDb)
    if (!title){
        userErr(400, "Please supply a title!", res)
    } else {
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json({savedBudget})
            })
            .catch(err => {
                userErr(500, err.message, res)
            })
    }
}
module.exports = router;