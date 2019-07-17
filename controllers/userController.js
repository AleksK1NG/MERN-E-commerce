const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.registerUser = async (req, res) => {
  const { email, username, password, info } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) return res.status(400).json({ errors: [{ msg: 'User already exists' }] })

    user = new User({
      email,
      username,
      info
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    const payload = { user: { id: user.id } }

    console.log('Register user payload => ', payload)

    await user.save()

    // Add token to user
    await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (error, token) => {
      if (error) throw error
      user.token = token
      res.status(201).json(user.toAuthJSON())
    })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
}

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    // check user exists
    let user = await User.findOne({ email })
    if (!user) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })

    // compare password with db user password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })

    const payload = { user: { id: user.id } }

    // Add token to user
    await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 }, (error, token) => {
      if (error) throw error
      user.token = token
      res.status(201).json(user.toAuthJSON())
    })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
}

module.exports.loadUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password')
    console.log('Load user => ', user)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
}
