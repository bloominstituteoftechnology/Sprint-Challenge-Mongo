const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({success: 'server starting budget'})
})
module.exports = router;