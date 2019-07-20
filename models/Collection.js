const mongoose = require('mongoose')


const collectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  routeName: {
    type: String,
    required: [true, 'Title is required']
  },
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Item',
    required: [true, 'Item must belong to a collection !']
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: { type: Date, default: Date.now }
})




const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection