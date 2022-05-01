const asyncHandler = require("express-async-handler");
const { getData, createTask } = require("../service/todoService");

// @desc    Get todo list
// @route   GET /api/todo
// @access  Public
const getTodoList = asyncHandler(async (req, res) => {
    const todoList = getData("todolist");
    res.status(200).json(todoList);
});

// @desc    create todo task
// @route   POST /api/todo
// @access  Public
const createTodoTask = asyncHandler(async (req, res) => {
    const todoTask = createTask(req.body);
    res.status(201).json(todoTask);
});

// @desc    Get todo Task
// @route   GET /api/todo/:id
// @access  Public
const getTodoTask = asyncHandler(async (req, res) => {
    res.status(200).json("get todo task");
});

// @desc    Update todo Task
// @route   PUT /api/todo/:id
// @access  Public
const updateTodoTask = asyncHandler(async (req, res) => {
    res.status(202).json("update todo task");
});

// @desc    Delete todo Task
// @route   DELETE /api/todo/:id
// @access  Public
const deleteTodoTask = asyncHandler(async (req, res) => {
    res.status(202).json("delete todo task");
});

module.exports = {
    getTodoList,
    createTodoTask,
    getTodoTask,
    updateTodoTask,
    deleteTodoTask,
};
