const router = require('express').Router();
const Category = require('./Categories.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router.route('/').get(get).post(post)

function get (req, res) {
    Category.find()
        .select('-__v -_id')
        .then(category => {
            res.status(200).json({ category })
        })
        .catch(err => sendUserError(500, err.message, res))
    }

function post (req, res) {
    const categoryData = req.body
    const { title } = req.body
    const newCategory = new Category(categoryData)
    if (!title) {
        sendUserError(400, "Please provide a title for your category.", res)
    } else {
        newCategory
            .save()
            .then(savedCategory => {
                res.status(201).json({ savedCategory })
            })
            .catch(err => {
                sendUserError(500, err.message, res)
            })
    }
}

router.route('/:id').get(getId).delete(deleteId).put(updateId)

function getId (req, res) {
    const { id } = req.params
    Category.findById(id)
        .select('-__v -_id')
        .then(category => {
            if (category !== null) {
            res.json({ category })
        } else {
            sendUserError(404, "This category is no longer in our database.", res)
        }})
        .catch(err => sendUserError(500, err.message, res))
    }

function deleteId (req, res) {
    const { id } = req.params
    Category.findByIdAndRemove(id)
    .then(deletedCategory => {
        if (deletedCategory !== null) {
            res.json({ deletedCategory })
        } else {
        sendUserError(404, "This category has already been removed", res)
    }})
    .catch(err => {
        sendUserError(500, err.message, res)
    })
}

function updateId (req, res) {
    const { id } = req.params;
    const updates = ( title ) = req.body
    Category.findByIdAndUpdate(id, updates, { new: true })
        .then(updatedCategory => {
            res.status(200).json({ updatedCategory })
        })
        .catch(err => {
            sendUserError(500, err.message, res)
        })
}

module.exports = router