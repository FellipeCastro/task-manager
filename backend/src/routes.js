import { Router } from "express"
import Token from "./token.js"

import UserController from "./controllers/UserController.js"
import BoardController from "./controllers/BoardController.js"
import TaskController from "./controllers/TaskController.js"
import SubtaskController from "./controllers/SubtaskController.js"

const router = Router()

// Users
router.post("/users/register", UserController.Register)
router.post("/users/login", UserController.Login)
router.get("/users/profile", Token.Validate, UserController.Profile)

//Boards
router.get("/boards", Token.Validate, BoardController.List)
router.post("/boards", Token.Validate, BoardController.Insert)
router.delete("/boards/:id_board", Token.Validate, BoardController.Delete)

// Tasks
router.get("/tasks/:id_board", Token.Validate, TaskController.List)
router.post("/tasks/:id_board", Token.Validate, TaskController.Insert)
router.delete("/tasks/:id_task", Token.Validate, TaskController.Delete)

// Subtasks
router.get("/subtasks/:id_task", Token.Validate, SubtaskController.List)
router.post("/subtasks/:id_task", Token.Validate, SubtaskController.Insert)
router.put("/subtasks/:id_subtask", Token.Validate, SubtaskController.Edit)
router.delete("/subtasks/:id_subtask", Token.Validate, SubtaskController.Delete)

export default router
