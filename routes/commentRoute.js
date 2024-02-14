const express = require('express')

const commentController = require('../controllers/commentController')

const commentRouter = express.Router()

commentRouter.post('/addComment/:chapterId', commentController.addComment)
commentRouter.delete('/deleteComment/:id', commentController.deleteComment)

module.exports = commentRouter
