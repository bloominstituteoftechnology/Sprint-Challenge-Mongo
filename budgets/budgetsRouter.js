const express = require('express');
const Budget = require('./budget.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Working...")
});

module.exports = router;
