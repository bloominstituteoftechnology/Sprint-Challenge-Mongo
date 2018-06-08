const express = require('express');
const router = express.Router();
const Category = require('./category');

router
    .route('/')
    Category
    .get()