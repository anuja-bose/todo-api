const express = require("express");
const router = express.Router();
const {
    getTodoTasks,
    createTodoTask,
    getTodoTask,
    updateTodoTask,
    deleteTodoTask,
} = require("../controllers/todoController");

router
    .route("/")
    .get(getTodoTasks)
    .post(createTodoTask);
router
    .route("/:id")
    .get(getTodoTask)
    .put(updateTodoTask)
    .delete(deleteTodoTask);
module.exports = router;
