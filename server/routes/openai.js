import express from 'express'
import { chatAiAssit, chatAiCode, chatAitext } from '../controllers/openai.controller.js'

const router = express.Router()

//Chat
router.post("/text", chatAitext)

//Code
router.post("/code", chatAiCode)

//Assist
router.post("/assist", chatAiAssit)

export default router