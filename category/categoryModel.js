const mongoose = require("mongoose");

const schemaDef = {
    categoryTitle: {
        type: String,
        required: true
    }
}

const options = {
    timestamps = true
};

const categorySchema = new mongoose.Schema(schemaDef, options);

const categoryModel = mongoose.model("Category", categorySchema,"categories");

module.exports = categoryModel;