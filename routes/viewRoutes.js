const express = require("express")
const todos = require("../models/todo");
// const Todo = require("../models/todo");
// const utils = require("../utils/utils")
const viewRouter = express.Router()
// const { isAuthenticated } = require("../middlewares");

// router.get("", (req,res) => {
//     return utils.readData()
//     .then((dataArr) => {
//         res.render("index", {title: "Home",  todos: dataArr})
//     })
    
// })

// router.get("/todos/:title", (req, res) => {
//     const { title } = req.params

//     return utils.readData()
//         .then((dataArr) => {
//             const data = dataArr.find((element) => element.title.toLowerCase() === title.toLowerCase())

//             return res.render("todos", { title: "Update", todos: data })
//         })
// })

// viewRouter.get("", (req, res) => {
//     console.log("The passed key from request is ----- ", req.randomKey);
//     return utils.readData()
//     .then((dataArr) => {
//         // to render the files processed by view engine
//         return res.render("index", {title: "Home"})
//     })
// })
viewRouter.get("", (req,res) => {
    todos.find({}, function(err, data) {
        // note that data is an array of objects, not a single object!
        res.render('index.ejs', {
            todos : req.todos,
            todos: data
        });
    });
    
})



// isAuthenticated is a middleware
viewRouter.get("/todo/add", (req, res) => {
    return res.render("add-item.ejs", {title: "Add"})
})
viewRouter.get("/auth/signup", (req, res) => {
    return res.render("signup", {title: "Signup"})
})
viewRouter.get("/auth/signin", (req, res) => {
    return res.render("signin", {title: "Signin"})
})

// // parameters routes at last
// viewRouter.get("/todos/:title", (req, res) => {
//     const {title} = req.params
//     // console.log("title is ", title);

//     return utils.readData()
//     .then((dataArr) => {
//         const todo = dataArr.find((element) => {
//             // console.log("element is ", element);
//             return element.title.toLowerCase() === title.toLowerCase()
//         })
//         // console.log("todo is ", todo);
//         return res.render("todo", {title: "Update", todo})
//     })
// })
viewRouter.get("/todo/:title", (req,res) => {
    res.render("todo")
    
    })



module.exports = viewRouter