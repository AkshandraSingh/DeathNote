const express = require('express')

const notesController = require('../controllers/notesController')
const { uploadPDF } = require('../middlewares/chapterNotesStorage')

const chapterNotesRouter = express.Router()

chapterNotesRouter.post('/addChapterNotes', uploadPDF.single('chapterPdf'), notesController.addChapterNotes)

module.exports = chapterNotesRouter
