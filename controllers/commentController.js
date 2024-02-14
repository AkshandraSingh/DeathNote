const commentSchema = require('../models/commentModel')

module.exports = {
    addComment: async (req, res) => {
        try {
            const chapterId = req.params.chapterId
            const commentData = new commentSchema(req.body)
            commentData.chapterNotesId = chapterId
            await commentData.save()
            res.status(202).send({
                success: true,
                message: "Comment added!"
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },

    deleteComment: async (req, res) => {
        try {
            const commentId = req.params.id
            const commentData = await commentSchema.findByIdAndDelete(commentId)
            if (!commentData) {
                return res.status(400).send({
                    success: false,
                    message: "Comment ID is incorrect!"
                })
            }
            res.status(202).send({
                success: true,
                message: "Comment deleted!"
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
