import express from 'express'
import { chatAiAssit, chatAiCode, chatAitext } from '../controllers/openai.controller.js'

const router = express.Router()

//Chatbot Text
router.post("/text", chatAitext)

//Chatbot Code
router.post("/code", chatAiCode)

//Chatbot Assist
router.post("/assist", chatAiAssit)

export default router