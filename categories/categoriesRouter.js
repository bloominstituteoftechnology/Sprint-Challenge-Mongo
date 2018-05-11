const express = require('express');
const Category = require('./Category.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Working...")
});

module.exports = router;
