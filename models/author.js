const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    authorName : {
        type : String,
        required : true
    }
})