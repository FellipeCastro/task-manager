import { Router } from "express"
import Token from "./token.js"

import UserController from "./controllers/UserController.js"
import BoardController from "./controllers/BoardController.js"

const router = Router()

// Users
router.post("/users/register", UserController.Register)
router.post("/users/login", UserController.Login)
router.get("/users/profile", Token.Validate, UserController.Profile)

//Boards
router.get("/boards", Token.Validate, BoardController.List)
router.post("/boards", Token.Validate, BoardController.Insert)

export default router
