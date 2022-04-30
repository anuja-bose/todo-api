const asyncHandler = require("express-async-handler");


// @desc    Get todo list
// @route   GET /api/todo
// @access  Private
const getTodoList = asyncHandler(async (req, res) => {
    const todoList = { 'id' : '01'}
    res.status(200).json(todoList);
});


module.exports = {
    getTodoList
};
