const contactUsSchema = require('../models/contactUsModel')
const contactUsLogger = require('../utils/contactUsLogger/contactUsLogger')

module.exports = {
    giveMessage: async (req, res) => {
        try {
            const contactUsData = new contactUsSchema(req.body)
            await contactUsData.save()
            contactUsLogger.log('info', "Message successfully send!")
            return res.status(202).send({
                success: true,
                message: "Message successfully send!"
            })
        } catch (error) {
            contactUsLogger.log('error', "Internal Server Error!")
            contactUsLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Internal Server Error!",
                error: error.message
            })
        }
    },

    checkMessages: async (req, res) => {
        try {
            const allMessages = await contactUsSchema.find()
            contactUsLogger.log('info', "All messages found!")
            res.status(200).send({
                success: true,
                message: "All messages found!",
                messagesData: allMessages,
            })
        } catch (error) {
            contactUsLogger.log('error', "Internal Server Error!")
            contactUsLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Internal Server Error!",
                error: error.message
            })
        }
    },
}
