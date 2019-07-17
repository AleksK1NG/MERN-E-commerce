const mongoose = require('mongoose')
// const dotenv = require('dotenv')
// dotenv.config({ path: './config.env' })

const DB = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })

    console.log('MongoDB Connected Successful...')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB
