const express = require("express")
const todos = require("../models/todo");
// const Todo = require("../models/todo");
// const utils = require("../utils/utils")
const viewRouter = express.Router()

viewRouter.get("", (req,res) => {
    todos.find({}, function(err, data) {
        
        res.render('index.ejs', {
            todos : req.todos,
            todos: data
        });
    });
    
})




viewRouter.get("/todo/add", (req, res) => {
    return res.render("add-item.ejs", {title: "Add"})
})
viewRouter.get("/auth/signup", (req, res) => {
    return res.render("signup", {title: "Signup"})
})
viewRouter.get("/auth/signin", (req, res) => {
    return res.render("signin", {title: "Signin"})
})


viewRouter.get("/todo/:id", (req,res) => {
    res.render("todo")
    
    })



module.exports = viewRouter