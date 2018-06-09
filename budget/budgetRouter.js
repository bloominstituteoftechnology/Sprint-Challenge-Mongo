const router = require('express').Router();
const Budget = require('./Budget.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router.route('/').post(post).get(get)

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
function get (req, res) {
    Budget.find()
    .select('-__v -_id')
    .then(budget => {
        res.status(200).json({ budget })
    })
    .catch(err => sendUserError(500, err.message, res))
}



router.route('/:id').get(getId).delete(deleteId).put(updateId)

function getId (req, res) {
    const { id } = req.params
    Budget.findById(id)
        .select('-_id -__v')
        .then(foundBudget => {
            if (foundBudget !== null) {
            res.json({ foundBudget })
        } else {
            sendUserError(404, "This budget is no longer in our database.", res)
        }})
        .catch(err => {
            sendUserError(500, err.message, res)
        })
}

function deleteId (req, res) {
    const { id } = req.params
    Budget.findByIdAndRemove(id)
    .then(deletedBudget => {
        if (deletedBudget !== null) {
            res.json({ deletedBudget })
        } else {
        sendUserError(404, "This budget has already been removed", res)
    }})
    .catch(err => {
        sendUserError(500, err.message, res)
    })
}

function updateId (req, res) {
    const { id } = req.params;
    const updates = ( title ) = req.body
    Budget.findByIdAndUpdate(id, updates, { new: true })
        .then(updatedBudget => {
            res.status(200).json({ updatedBudget })
        })
        .catch(err => {
            sendUserError(500, err.message, res)
        })
}
module.exports = router