const express = require('express')

const contactUsController = require('../controllers/contactUsController')

const contactUsRouter = express.Router()

contactUsRouter.post('/giveMessage', contactUsController.giveMessage)
contactUsRouter.get('/checkMessages', contactUsController.checkMessages)

module.exports = contactUsRouter
