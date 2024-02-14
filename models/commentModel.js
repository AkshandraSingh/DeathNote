const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    chapterNotesId: {
        type: mongoose.Types.ObjectId,
        ref: 'chapterNotes',
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

contactUsSchema.set('timestamps', true)

module.exports = mongoose.model('comments', contactUsSchema);
