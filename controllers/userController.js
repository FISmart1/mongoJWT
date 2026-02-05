const User = require('../models/User')
const generateToken = require('../utils/generateToken')

/* REGISTER */
const registerUser = async (req, res) => {
  const { name, email, password } = req.body

  const userExist = await User.findOne({ email })
  if (userExist) {
    return res.status(400).json({ message: 'User sudah ada' })
  }

  const user = await User.create({ name, email, password })

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  })
}

/* LOGIN */
const loginUser = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(401).json({ message: 'Email atau password salah' })
  }
}

module.exports = { registerUser, loginUser }
