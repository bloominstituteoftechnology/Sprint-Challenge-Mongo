const router = require("express").Router();
const Expense = require("./expenseModel");

const Budget = require("../budget/budgetModel");

const sendUserError = (status, message, res, err=err.message) =>{
    res.status(status).json({Error: message, err});
    return;
};

const get = (req, res) =>{
    Expense
    .find()
    .then(expense =>{
        res.json({expense});
    })
    .catch(err =>{
        sendUserError(500, "There was an error in retrieving expenses", res, err);
    });
};

const post = (req, res) =>{
    const {amount, description, budget, category} = req.body;
    expense = new Expense({amount, description, budget, category});

    expense
    .save()
    .then(savedExpense =>{
        res.status(201).json({savedExpense});
    })
    .catch(err =>{
        sendUserError(500, "There was an error in saving expense to database", res, err);
    });
};

const getId = (req, res) =>{
    const {id} = req.params;

    Expense
    .findById(id)
    .select({ _id:0, amount:1, description:1})
    .then(found =>{
        
        res.json(found);
    })
    .catch(err =>{
        sendUserError(500, `There was an error in retrieving ${id} from database`, res, err);
    });
};

const postBudget = (req, res) =>{
    const { id } = req.params;
    const { budgetId } = req.body;

    Budget.findOne({ _id: id })
        .then(foundBudget =>{
            foundBudget.expenses = [...foundBudget.expenses, budgetId];
            foundBudget
                .save()
                .then(savedBudget =>{
                    res.status(201).json(savedBudget);
                })
                .catch(err =>{
                    sendUserError(500, "There was an error in saving budget to expense database", res, err)
                })
        .catch(err =>{
            sendUserError(500, "There was an error in saving budget to database");
            });
        });
};

router
    .route("/")
    .get(get)
    .post(post);

router
    .route("/:id")
    .get(getId);

router
    .route("/:id/budget")
    .post(postBudget);
module.exports = router;