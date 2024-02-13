const notesSchema = require('../models/notesModel')

module.exports = {
    addChapterNotes: async (req, res) => {
        try {
            const chapterNotesData = new notesSchema(req.body)
            const chapterPdf = `/upload/chapterNotes/${req.file.filename}`
            chapterNotesData.chapterPdf = chapterPdf
            await chapterNotesData.save()
            res.status(201).send({
                success: true,
                message: "Chapter notes is successfully uploaded!"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error
            })
        }
    }
}
