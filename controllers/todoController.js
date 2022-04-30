const asyncHandler = require("express-async-handler");
const {getData,createTask} = require('../service/todoService');

// @desc    Get todo list
// @route   GET /api/todo
// @access  Public
const getTodoList = asyncHandler(async (req, res) => {
    const todoList = getData('todolist');
    res.status(200).json(todoList);
});

// @desc    Get todo list
// @route   GET /api/todo
// @access  Public
const createTodoTask = asyncHandler(async (req, res) => {
  
    const todoTask = createTask(req.body);
    res.status(201).json(todoTask);
});

module.exports = {
    getTodoList,
    createTodoTask
};
