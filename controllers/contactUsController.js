const contactUsSchema = require('../models/contactUsModel')

module.exports = {
    giveMessage: async (req, res) => {
        try {
            const contactUsData = new contactUsSchema(req.body)
            await contactUsData.save()
            return res.status(202).send({
                success: true,
                message: "Message successfully send!"
            })
        } catch (error) {
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
            res.status(200).send({
                success: true,
                message: "All messages found!",
                messagesData: allMessages,
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Internal Server Error!",
                error: error.message
            })
        }
    },
}
