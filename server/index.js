const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://bangalore-food-bank-e1wpw6jta-tejaswini-s-projects2.vercel.app'
  ]
}))

app.use(express.json())

// Routes
app.use('/api/contact', require('./routes/contact'))
app.use('/api/donate', require('./routes/donate'))

// Health check
app.get('/', (req, res) => res.json({ message: 'Bangalore Food Bank API running' }))

// Start server FIRST then connect DB
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Connect MongoDB separately so server doesn't crash if DB is slow
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('DB connection error:', err.message))