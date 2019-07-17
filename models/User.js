const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    minlength: [6, 'Too short, min is 6 characters'],
    required: 'Password is required',
    // select: false
  },

  avatar: {
    type: String
  },
  info: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    avatar: this.avatar,
    username: this.username,
    info: this.info,
    email: this.email,
    token: this.token
  }
}

const User = mongoose.model('User', UserSchema)

module.exports = User
