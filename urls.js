const express = require('express')

const chapterNotesRoute = require('./routes/chapterNotesRoute')
const contactUsRoute = require('./routes/contactUsRoute')

const commonRouter = express.Router()

commonRouter.use('/notes', chapterNotesRoute)
commonRouter.use('/contactUs', contactUsRoute)

module.exports = commonRouter
