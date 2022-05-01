const express = require("express");
const router = express.Router();
const {
    getTodoList,
    createTodoTask,
    getTodoTask,
    deleteTodoTask,
    updateTodoTask,
} = require("../controllers/todoController");

router
    .route("/")
    .get(getTodoList)
    .post(createTodoTask);
router
    .route("/:id")
    .get(getTodoTask)
    .delete(deleteTodoTask)
    .put(updateTodoTask);
module.exports = router;
