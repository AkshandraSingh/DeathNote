const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

contactUsSchema.set('timestamps', true)

module.exports = mongoose.model('contactUs', contactUsSchema);
