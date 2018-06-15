const router = require("express").Router();
const Budget = require("./budgetModel");

const sendUserError = (status, message, res, err=err.message) =>{
    res.status(status).json({Error: message, err});
    return;
}

router
    .route("/")

router
    .route("/:id")

module.exports = router;

