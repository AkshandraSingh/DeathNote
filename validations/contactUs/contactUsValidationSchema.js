const joi = require('joi')

const contactUsValidation = {
    giveMessage: joi.object({
        userName: joi
            .string()
            .max(20)
            .min(3)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-man": "{#label} should be at least {#limit} characters",
            })
            .required(),
        userEmail: joi
            .string()
            .email()
            .min(11)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-man": "{#label} should be at least {#limit} characters",
            })
            .required(),
        message: joi
            .string()
            .min(250)
            .max(2)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-man": "{#label} should be at least {#limit} characters",
            })
            .required(),
    }).unknown(true),
}

module.exports = contactUsValidation
