const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({

    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true
     },
    completed : {
        type:Boolean,
        required: false
     }
    
}, {timestamps : true});

module.exports = mongoose.model("Todo", TodoSchema);