const express = require('express')

const commentController = require('../controllers/commentController')
const commentValidator = require('../validations/comments/commentValidator')

const commentRouter = express.Router()

commentRouter.post('/addComment/:chapterId', commentValidator.addComment, commentController.addComment)
commentRouter.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = commentRouter
