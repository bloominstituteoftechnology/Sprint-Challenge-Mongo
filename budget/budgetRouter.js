const router = require("express").Router();
const Budget = require("./budgetModel");

const sendUserError = (status, message, res, err=err.message) =>{
    res.status(status).json({Error: message, err});
    return;
};

const get = (req, res) =>{
    Budget
    .find()
    .then(budget =>{
        res.json({budget});
    })
    .catch(err =>{
        sendUserError(500, "There was an error in retrieving budgets", res, err);
    });
};

const post = (req, res) =>{
    const { title, budgetAmount } = req.body;
    const budget = new Budget({title, budgetAmount});
    budget
    .save()
    .select({_id:1, title:1})
    .then(budget =>{
        res.status(201).json({budget});
    })
    .catch(err =>{
        sendUserError(500, "There was an error in saving budget to database", res, err);
    });
};

const getId = (req, res) =>{
    const { id } = req.params;

    Budget
    .findById(id)
    .then(budget =>{
        res.json({budget});
    })
    .catch(err =>{
        sendUserError(500, `There was an error in retrieving budget ${id} from database`, res, err)
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

