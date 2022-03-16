const express = require('express');
const router = express.Router();
const Author = require('../models/author');

router.get('/' , (req,res) => {
    res.render("authors/index");
});

router.get('/new' , (req,res) => {
    res.render("authors/new" , {author : new Author()});
});

router.get('/' , (req,res) => {
    res.send("Create");
});

module.exports = router;