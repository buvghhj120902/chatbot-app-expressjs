import express from 'express'
import { login, signup } from '../controllers/auth.controller.js'

const router = express.Router()

//Register
router.post("/login", login)

//Login
router.post("/signup", signup)

export default router