const express = require('express')
const router = express.Router()
const Razorpay = require('razorpay')
const crypto = require('crypto')
const Donor = require('../models/Donor')

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Create order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, name, email, phone } = req.body
    const options = {
      amount: amount * 100, // in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    }
    const order = await razorpay.orders.create(options)
    const donor = new Donor({ name, email, phone, amount, razorpayOrderId: order.id })
    await donor.save()
    res.json({ success: true, order, key: process.env.RAZORPAY_KEY_ID })
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

// Verify payment
router.post('/verify', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body
    const sign = razorpay_order_id + '|' + razorpay_payment_id
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest('hex')

    if (expected === razorpay_signature) {
      await Donor.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { razorpayPaymentId: razorpay_payment_id, status: 'paid' }
      )
      res.json({ success: true, message: 'Payment verified!' })
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' })
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message })
  }
})

module.exports = router