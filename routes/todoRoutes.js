const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");


router.get("/api/tasks", taskController.getTasks);
router.post("/api/tasks", taskController.createTask);
router.put("/api/tasks/:id", taskController.updateTask);
router.delete("/api/tasks/:id", taskController.deleteTask);

module.exports = router;
