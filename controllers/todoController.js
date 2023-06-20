const todoModel = require("../models/todo");

const createTodo = async (req, res) =>{
    
    const {title, description,completed} = req.body;

    const newTodo = new todoModel({
        title: title,
        description : description,
        completed:completed
    });

    try {
        
        await newTodo.save();
        res.status(201).json(newTodo);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const updateTodo = async (req, res) =>{
    // const id = req.params.id;
    const title = req.params.title;
    const { description, completed} = req.body;

    const newTodo = {
        title : title,
        description: description,
        completed:completed
    }

    try {
        await todoModel.findByIdAndUpdate(title, newTodo, {new : true});
        res.status(200).json(newTodo);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }

}

const deleteTodo = async (req, res) =>{

    const id = req.params.id;
    try {
        
        const todo = await todoModel.findByIdAndRemove(id);
        res.status(202).json(todo);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

const getTodo = async (req, res) =>{
    try {
        
        const todos = await todoModel.find({});
        res.status(200).json(todos);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo
}