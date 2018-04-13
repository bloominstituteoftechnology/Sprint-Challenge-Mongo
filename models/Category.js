//importing necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating a new schema
const CategorySchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
    },
});

//exporting the schema as a model and naming the collection
module.exports = mongoose.model("CategoryModel", CategorySchema, "Categories");