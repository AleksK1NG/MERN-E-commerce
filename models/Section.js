const mongoose = require('mongoose')

sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Name is required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image is required']
  },
  size: {
    type: String
  },
  linkUrl: {
    type: String,
    required: [true, 'Link is required']
  }
})

const Section = mongoose.model('Section', sectionSchema)

module.exports = Section
