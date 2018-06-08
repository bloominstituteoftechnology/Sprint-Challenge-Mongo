const mongoose = require ('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;


const definition = {
    title: {
        type: String, 
        required: true
    }
};

const options = {
    timestamps: true
};

const categorySchema = new Schema(definition, options);

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;