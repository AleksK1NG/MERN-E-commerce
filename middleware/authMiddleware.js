const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.onlyAuthUser = async (req, res, next) => {
  let token
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  } else {
    // Get token from header
    token = req.header('x-auth-token')
    console.log('Auth Middleware => ', token)
  }

  // if no token
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' })

  // Verify token
  try {
    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    // console.log('Auth Middleware decoded => ', decoded)
    let candidate = await User.findById(decoded.user.id)
    if (!candidate) return res.status(401).json({ msg: 'No token, authorization denied' })

    // add decoded user from token to req body
    req.userId = candidate._id
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ msg: 'Toke is not valid' })
  }
}
