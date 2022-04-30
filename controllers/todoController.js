const asyncHandler = require("express-async-handler");
const {getToDoListFromFile} = require('../connect/connectDataFile');

// @desc    Get todo list
// @route   GET /api/todo
// @access  Private
const getTodoList = asyncHandler(async (req, res) => {
    const todoList = getToDoListFromFile();
console.log("--->",todoList);
    res.status(200).json(todoList);
});


module.exports = {
    getTodoList
};
