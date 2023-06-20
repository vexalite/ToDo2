const express = require("express");
const { getTodo, createTodo, deleteTodo, updateTodo } = require("../controllers/todoController");
const auth = require("../middlewares/auth");
const todoRouter = express.Router();

todoRouter.get("/", auth, getTodo);

todoRouter.post("/", auth, createTodo);

todoRouter.delete("/:id", auth, deleteTodo);

todoRouter.put("/:id", auth, updateTodo);

module.exports = todoRouter;