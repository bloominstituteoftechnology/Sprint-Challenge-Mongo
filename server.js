const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/budgetDB');
const Budget = require('./Models/budget.js');
const Category = require('./Models/category.js');
const Expense = require('./Models/expense.js');
const server = express();
const to = require('./to')

server.use(bodyParser.json());

server.post('/budget', async (req, res) => {
    const bud = req.body;
    if (bud.title && bud.budgetAmount) {
        const budget = new Budget(bud);
        const [err] = await to(budget.save());
        if (err) {
            res.status(500).json({
                error: 'budgetAmount or title is missing.'
            })
        } else {
            res.status(200).json({
                sucess: 'Budget got saved.'
            });
        }
    } else {
        res.status(422).json({
            error: 'budgetAmount or title is missing.'
        })
    }
});
server.post('/category', (req, res) => {
    const title = req.body;
    if (title) {
        const category = new Category(title);
        category.save();
        res.status(200).json({
            sucess: 'Category got saved.'
        });
    } else {
        res.status(422).json({
            error: 'Title is missing.'
        })
    }
});
//Trying a try catch
server.get('/category', async (req, res) => {
    try {
        const cat = await Category.find({});
        res.status(200).json(cat);
    } catch (err) {
        res.status(422).json(err);
    }
});
//I am going to get  the budget and category id's from the client.

server.get('/expense', async (req, res) => {
    const [err, exp] = await to(Expense.find().populate('budget category'));
    if (err) res.status(err).json({
        error: 'Expense not found '
    })
    if (exp) res.status(200).json(exp);
});
server.post('/expense', async (req, res) => {
    const exp = req.body;
    const [err_b, b] = await to(Budget.findOne({
        'title': exp.b_title
    }));
    if (err_b) res.status(500).json({
        error: 'Budget title is missing .'
    });
    if (!b) res.status(500).json({
        error: 'Budget quary is empty.'
    });
    const [err_c, c] = await to(Category.findOne({
        'title': exp.c_title
    }));
    if (err_c) res.status(500).json({
        error: 'Category title is missing.'
    });
    if (!b) res.status(500).json({
        error: 'Category quary is empty.'
    });

    const expense = {
        "amount": exp.amount,
        "description": exp.description,
        "budget": b._id,
        "category": c._id
    }
    const [error] = await to(Expense.create(expense));
    if (error) {
        res.status(500).json({
            error: "Expense not created"
        })
    } else {
        res.status(201).json({
            expense
        })
    }
});
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server up and running on ${port}`);
});