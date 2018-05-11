const mongoose = require('mongoose');

const Budget = mongoose.Schema({
  title: { type: String, required: true },
  bugetAmount: {type: Number, required: true}
})


module.exports = mongoose.model('Budget', Budget);
