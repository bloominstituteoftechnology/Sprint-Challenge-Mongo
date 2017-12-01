const mongoose = require("mongoose");

const Account = require("../models/account");

const STATUS_USER_ERROR = 422;

const newAccount = (req, res) => {
  const { title, amount } = req.body;
  const newAccount = new Account({ title, amount });

  newAccount
    .save()
    .then(createdAccount => {
      res.json(createdAccount);
    })
    .catch(err => {
      res.status(500).json({ err });
      return;
    });
};

module.exports = {
  newAccount
};
