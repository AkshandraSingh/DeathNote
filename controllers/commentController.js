const commentSchema = require('../models/commentModel')
const commentLogger = require('../utils/commentLogger/commentLogger')

module.exports = {
    addComment: async (req, res) => {
        try {
            const chapterId = req.params.chapterId
            const commentData = new commentSchema(req.body)
            commentData.chapterNotesId = chapterId
            await commentData.save()
            commentLogger.log('info', "Comment added!")
            res.status(202).send({
                success: true,
                message: "Comment added!"
            })
        } catch (error) {
            commentLogger.log('error', "Internal Server Error!")
            commentLogger.log('error', `Error: ${error.message}`)
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
                commentLogger.log('error', "Comment ID is incorrect")
                return res.status(400).send({
                    success: false,
                    message: "Comment ID is incorrect!"
                })
            }
            commentLogger.log('info', "Comment deleted!")
            res.status(202).send({
                success: true,
                message: "Comment deleted!"
            })
        } catch (error) {
            commentLogger.log('error', "Internal Server Error!")
            commentLogger.log('error', `Error: ${error.message}`)
            res.status(500).send({
                success: false,
                message: "Server Error",
                error: error.message
            })
        }
    },
}
