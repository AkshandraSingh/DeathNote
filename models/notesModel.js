const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    chapterName: {
        type: String,
        required: true,
    },
    chapterPdf: {
        type: String,
        required: true,
    },
    chapterLikes: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
})

notesSchema.set('timestamps', true)

module.exports = mongoose.model('chapterNotes', notesSchema);
