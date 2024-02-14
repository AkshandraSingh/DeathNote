const express = require('express')

const chapterNotesRoute = require('./routes/chapterNotesRoute')
const contactUsRoute = require('./routes/contactUsRoute')
const commentRoute = require('./routes/commentRoute')

const commonRouter = express.Router()

commonRouter.use('/notes', chapterNotesRoute)
commonRouter.use('/contactUs', contactUsRoute)
commonRouter.use('/comments', commentRoute)

module.exports = commonRouter
