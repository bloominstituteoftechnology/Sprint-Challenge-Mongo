const mongoose = require('mongoose');
const ObjectId = mongose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const Categorie = new Schema({});

module.exports = mongoose.model('Categorie', Categorie);
