import { Router } from "express"
import Token from "./token.js"

import UserController from "./controllers/UserController.js"

const router = Router()

router.get("/", (req, res) => {
    res.send("Hello world")
})

// Users
router.post("/users/register", UserController.Register)
router.post("/users/login", UserController.Login)
router.get("/users/profile", Token.Validate, UserController.Profile)

export default router
