const express = require('express')
const router = express.Router()
const ContactMessage = require('../models/ContactMessage')

router.post('/', async (req, res) => {
  try {
    const message = new ContactMessage(req.body)
    await message.save()
    res.json({ success: true, message: 'Message received!' })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

module.exports = router