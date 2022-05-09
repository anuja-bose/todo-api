const asyncHandler = require("express-async-handler");
const { getTasks,createTask,getTask,deleteTask,updateTask } = require("../service/todoService");

// @desc    Get todo list
// @route   GET /api/todo
// @access  Public
const getTodoTasks = asyncHandler(async (req, res) => {
    const todoList = getTasks();
    res.status(200).json(todoList);
});

// @desc    create todo task
// @route   POST /api/todo
// @access  Public
const createTodoTask = asyncHandler(async (req, res) => {
    let  result = await createTask(req.body);
    res.status(result.statusCode).json(result.message);
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
    const { task, status} = req.body;
    let id = req.params.id;
    let newRecord = {
        task: task,
        status: status,
        id: id,
    };

    let  result = await updateTask(newRecord,id);
    res.status(result.statusCode).json(result.message);
});

// @desc    Delete todo Task
// @route   DELETE /api/todo/:id
// @access  Public
const deleteTodoTask = asyncHandler(async (req, res) => {
    let  result = await deleteTask(req.params.id);
    res.status(result.statusCode).json(result.message);
});

module.exports = {
    getTodoTasks,
    createTodoTask,
    getTodoTask,
    updateTodoTask,
    deleteTodoTask,
};
