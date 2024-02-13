require('dotenv').config()
const express = require('express')

require('./config/modelConfig')

const app = express()

const PORT = process.env.PORT || 9001

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
