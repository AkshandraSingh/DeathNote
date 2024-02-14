const joi = require('joi')

const commentValidationSchema = {
    addComment: joi.object({
        userName: joi
            .string()
            .max(20)
            .min(3)
            .message({
                "string-min": "{#label} should be at least {#limit} characters",
                "string-man": "{#label} should be at least {#limit} characters",
            })
            .required(),
        comment: joi
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

module.exports = commentValidationSchema
