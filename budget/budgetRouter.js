const router = require('express').Router();
const Budget = require('./Budget.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router.route('/').post(post)

function post (req, res) {
    const budgetData = req.body
    const { title, budgetAmount } = req.body
    const newBudget = new Budget(budgetData)
    if (!title) {
        sendUserError(400, "Please provide a title for your budget", res)
    } else {
        newBudget
            .save()
            .then(savedBudget => {
                res.status(201).json({ savedBudget })
            })
            .catch(err => {
                sendUserError(500, err.message, res)
            })
    }

}
module.exports = router