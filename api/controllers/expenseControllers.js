const mongoose = require('mongoose');

const Expense = mongoose.model('Expense');

const STATUS_USER_ERROR= 422;

const postExpense =(req, res) => {
   const { amount, description, budget, category} = req.body;
   const newExpense = new Expense ({ amount, description, budget, category});
   newExpense.save()
   .then((createdExpense) => {
       res.json(createdExpense);
   })
   .catch((err)=> {
       res.status( STATUS_USER_ERROR)
       res.json({ errorMessage: err.message });
   });
};

const getExpense =(req,res) => {
    Expense.find({})
    .then((Expense) => {
        res.json(categories);
    }) 
    .catch((err) => {
        res.status(STATUS_USER_ERROR);
        res.json({ err });
    });
};
}
}