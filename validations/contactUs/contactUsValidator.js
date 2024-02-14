const contactUsValidationSchema = require('./contactUsValidationSchema')

module.exports = {
    giveMessage: async (req, res, next) => {
        const value = await contactUsValidationSchema.giveMessage.validate(req.body, { abortEarly: false })
        if (value.error) {
            return res.status(403).json({
                success: false,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },
}
