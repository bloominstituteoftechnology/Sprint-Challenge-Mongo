const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


module.exports = mongoose.model('Budget', Budget);