const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router.post('/', (req, res) => {
	const categoryData = req.body;
	const category = new category(categoryData);
	category
		.save()
		.then(category => {
			res.status(201).json(friends);
		})
		.catch( err => {
			res.status(500).json({ Error: "Unable to create new category"})
		})
})

router.get('/', (req, res) => {
    res.send("Working...")
});

module.exports = router;
