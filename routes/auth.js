const express                      = require('express')
const bcrypt                       = require('bcryptjs')
const jwt                          = require('jsonwebtoken')
const { check, validationResult, } = require('express-validator')

const auth                         = require('../middleware/auth')
const User                         = require('../models/User')
const config                       = require('config')
const router                       = express.Router()


// @route       GET api/auth
// @desc        GET logged in user
// @access      Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// @route       POST api/auth
// @desc        Auth user & get token
// @access      Public
router.post('/', [
        check('email', 'Please include a valid email.').isEmail(),
        check('password', 'Password is required.').exists()
    ], 
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }) }

        const { email, password, } = req.body

        try {
            let user = await User.findOne({ email })
            if (!user) { res.status(400).json({ msg: 'Invalid credentials'}) }

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) { return res.status(400).json({ msg: 'Invalid credentials'}) }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload, 
                config.get('JWT_SECRET'), 
                {
                    expiresIn: 360000
                }, 
                (err, token) => {
                    if (err) throw err
                    res.json({ token })
                }
            )
        } catch (err) {
            console.error(error.message)
            res.status(500).send('Server error')
        }
})

module.exports = router
