const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  type: { type: String, enum: ['volunteer', 'food_donor', 'fund_donor', 'corporate'], default: 'volunteer' },
  message: String,
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('ContactMessage', contactSchema)