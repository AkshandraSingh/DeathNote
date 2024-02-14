const notesSchema = require('../models/notesModel')
const commentsSchema = require('../models/commentModel')

module.exports = {
    addChapterNotes: async (req, res) => {
        try {
            const chapterNotesData = new notesSchema(req.body)
            const chapterPdf = `/upload/chapterNotes/${req.file.filename}`
            chapterNotesData.chapterPdf = chapterPdf
            await chapterNotesData.save()
            res.status(202).send({
                success: true,
                message: "Chapter notes is successfully uploaded!"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    deleteChapterNotes: async (req, res) => {
        try {
            const chapterNotesId = req.params.id
            const chapterNotesData = await notesSchema.findByIdAndDelete(chapterNotesId)
            if (!chapterNotesData) {
                return res.status(401).send({
                    success: false,
                    message: "Chapter Id is incorrect , try again"
                })
            }
            res.status(200).send({
                success: true,
                message: "Chapter is deleted successfully!"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    updateChapterNotes: async (req, res) => {
        try {
            const chapterId = req.params.id;
            const chapterNotesData = await notesSchema.findByIdAndUpdate(chapterId, req.body);
            if (!chapterNotesData) {
                return res.status(401).send({
                    success: false,
                    message: "Chapter Id is incorrect , try again"
                })
            }
            res.status(200).send({
                success: true,
                message: 'Chapter Notes is updated successfully!.'
            })
        }
        catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    viewAllChapterNotes: async (req, res) => {
        try {
            const allChapterNotesData = await notesSchema.find()
            res.status(200).send({
                success: true,
                message: "All chapters found",
                chaptersData: allChapterNotesData,
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    addChapterNoteLike: async (req, res) => {
        try {
            const chapterNoteId = req.params.id
            const chapterNoteData = await notesSchema.findById(chapterNoteId)
            chapterNoteData.chapterLikes++
            await chapterNoteData.save()
            res.status(200).send({
                success: true,
                message: "You Like chapter!"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    viewChapter: async (req, res) => {
        try {
            const chapterId = req.params.chapterId
            const chapterData = await notesSchema.findById(chapterId)
            const chapterCommentsData = await commentsSchema.find({
                chapterNotesId: chapterId
            })
            if (!chapterData) {
                return res.status(401).send({
                    success: false,
                    message: "Chapter id is incorrect!"
                })
            }
            res.status(200).send({
                success: true,
                message: "Chapter Data found!",
                chapterData: chapterData,
                chapterCommentsData: chapterCommentsData.length > 0 ? chapterCommentsData : "0 Comments"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },
}
