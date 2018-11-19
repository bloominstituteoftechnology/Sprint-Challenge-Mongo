const express = require('express');
const Category = require('./categoryModel.js');
const router = express.Router();



router
.route('/')
.get((req, res) => {

Category
.find()
.select('title')
.then(categories => {
    res.status(200)
    res.json({ categories })
})
.catch(err => {
    res.status(500)
    res.json({ message: "Your categories could not be found. "})
})
})

.post((req, res) => {
const { title } = req.body;
const newCategory = new Category({ title });

if(!title) {
    res.status(400)
    res.json({ message: "Please provide a title." })
}
else {
newCategory
.save()
.then(Category => {
    res.status(200)
    res.json({ Category })
})
.catch(err => {
    res.status(500)
    res.json({ message: "Your new category could not be added. "})
})
}})



module.exports = router