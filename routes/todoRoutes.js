const express = require('express');

const router = express.Router();
const {getTodoList,createTodoTask } = require ('../controllers/todoController');
router.route('/').get(getTodoList).post(createTodoTask)
module.exports = router;