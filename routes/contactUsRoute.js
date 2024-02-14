const express = require('express')

const contactUsController = require('../controllers/contactUsController')
const contactUsValidator = require('../validations/contactUs/contactUsValidator')

const contactUsRouter = express.Router()

contactUsRouter.post('/giveMessage', contactUsValidator.giveMessage, contactUsController.giveMessage)
contactUsRouter.get('/checkMessages', contactUsController.checkMessages)

module.exports = contactUsRouter
