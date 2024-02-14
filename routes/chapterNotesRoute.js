const express = require('express')

const notesController = require('../controllers/notesController')
const { uploadPDF } = require('../middlewares/chapterNotesStorage')

const chapterNotesRouter = express.Router()

chapterNotesRouter.post('/addChapterNotes', uploadPDF.single('chapterPdf'), notesController.addChapterNotes)
chapterNotesRouter.delete('/deleteChapterNotes/:id', notesController.deleteChapterNotes)
chapterNotesRouter.patch('/updateChapterNotes/:id', notesController.updateChapterNotes)
chapterNotesRouter.get('/viewAllChapterNotes', notesController.viewAllChapterNotes)
chapterNotesRouter.get('/addChapterNoteLike/:id', notesController.addChapterNoteLike)
chapterNotesRouter.get('/viewChapter/:chapterId', notesController.viewChapter)

module.exports = chapterNotesRouter
