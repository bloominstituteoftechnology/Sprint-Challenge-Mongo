const router = require('express').Router();
const Category = require('./Categories.js');

const sendUserError = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

router
    .route('/')
    .get((req, res) => {
        Category.find()
        .then(category => {
            res.status(200).json({ category })
        })
        .catch(err => sendUserError(500, err.message, res))
    })

module.exports = router