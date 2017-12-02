const Category = require('../models/category');

const CategoryController = {
    get: async (req, res) => {
        try {
            const categories = await Category.find({}).exec();
            res.json(categories);
        } catch (error) {
            console.log('CategoryControllers@get: ', error);
            res.status(422).json({ error });
        }
    },
    create: async (req, res) => {
        try {
            const { title } = req.body;
            const category = await new Category({ title }).save();    
            res.json(category);
        } catch (error) {
            console.log('CategoryController@create: ', error);
            res.status(422).json({ error });
        }
    }
};

module.exports = CategoryController;
