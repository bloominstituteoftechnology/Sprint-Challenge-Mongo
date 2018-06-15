const router = require("express").Router();
const Category = require("./categoryModel");

const sendUserError = (status, message, res, err=err.message) =>{
    res.status(status).json({Error: message, err});
    return;
}

const get = (req, res) =>{
    Category
    .find()
    .select({categoryTitle:1, _id:1})
    .sort({categoryTitle:1})
    .then(category =>{
        res.json({category});
    })
    .catch(err=>{
        sendUserError(500, "There was an error in retrieving categories", res, err);
    });
}

const post = (req, res) =>{
    const {categoryTitle} = req.body;
    const category = new Category({categoryTitle});

    category
    .save()
    .then(category =>{
        res.status(201).json(category);
    })
    .catch(err =>{
        sendUserError(500, "There was an error in saving category to database", res, err);
    });
};

const getId = (req, res) =>{
    const {id} = req.params;

    Category
    .findById(id)
    .then(categoryId =>{
        res.json(categoryId);
    })
    .catch(err =>{
        sendUserError(500, `There was an error in retrieving category ${id}`, res, err)
    });
};

router
    .route("/")
    .get(get)
    .post(post);

router
    .route("/:id")
    .get(getId);

module.exports = router;