const router = require('express').Router();
const Category = require('./categories.js');

const userErr = (status, message, res) => {
    res.status(status).json({error: message});
    return;
};

router.route('/').get(get).post(post)

function get(req, res) {
    Category.find()
        .select('-__v -_id')
        .then(category => {
            res.status(200).json({category})
        })
        .catch(err => userErr(500, err.message, res))
}

function post (req, res){
    const categoryDb = req.body
    const {title} = req.body
    const newCategory = new Category(categoryDb)
    if(!title){
        userErr(400, "Please supply a title.", res)
    } else {
        newCategory
            .save()
            .then(savedCategory => {
                res.status(201).json({savedCategory})
            })
            .catch(err => {
                userErr(500, err.message, res)
            })
    }
}

module.exports = router;