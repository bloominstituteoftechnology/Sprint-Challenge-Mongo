const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema( 
    { 
        id: mongoose.Schema.Types.ObjectId,
        title: String
    }
);
module.exports = mongoose.model('Category', CategorySchema);
