const mongoose = require('mongoose')

const mainLogger = require('../utils/mainLogger')

mongoose.connect(process.env.URL)

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected! 🚀')
    mainLogger.log('info', `Mongoose is connected!`)
})

mongoose.connection.on('error', (error) => {
    console.log('Mongoose Error ❌')
    console.log(`Error: ${error}`)
    mainLogger.log('error', `Mongoose connection Error!`)
    mainLogger.log('error', `Error: ${error}`)
})
