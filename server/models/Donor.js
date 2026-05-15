const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Donor', donorSchema)