const mongoose = require('mongoose')


const Catergory = mongoose.Schema({
  title: { type: String, required: true },
})

module.exports = mongoose.model('Catergory', Catergory)
