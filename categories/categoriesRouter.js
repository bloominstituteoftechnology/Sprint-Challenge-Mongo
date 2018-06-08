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


module.exports = router