const express = require('express')

const chapterNotesRoute = require('./routes/chapterNotesRoute')

const commonRouter = express.Router()

commonRouter.use('/notes', chapterNotesRoute)

module.exports = commonRouter
