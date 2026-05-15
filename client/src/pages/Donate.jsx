import { useState } from 'react'
import API_BASE from '../config'

const Donate = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', amount: 500 })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleDonate = async () => {
    if (!form.name || !form.email || !form.amount) {
      alert('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      // Step 1 - Create order from backend
      const res = await fetch(`${API_BASE}/api/donate/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!data.success) {
        alert('Could not create order. Try again.')
        setLoading(false)
        return
      }

      // Step 2 - Open Razorpay checkout
      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: 'INR',
        name: 'Bangalore Food Bank',
        description: 'Donation',
        order_id: data.order.id,
        handler: async (response) => {
          // Step 3 - Verify payment
          const verifyRes = await fetch(`${API_BASE}/api/donate/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          })
          const verifyData = await verifyRes.json()
          if (verifyData.success) {
            alert('🎉 Thank you for your donation! Payment successful.')
          } else {
            alert('Payment verification failed. Contact support.')
          }
        },
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: '#f97316' },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      alert('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
        padding: '80px 24px', textAlign: 'center', color: 'white',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '16px' }}>Make a Difference</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Donate Now</h1>
        <p style={{ fontSize: '1rem', color: '#fed7aa', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          100% of your donation goes to feeding programs. 80G tax exemption available.
        </p>
      </section>

      {/* Donation Form */}
      <section style={{ padding: '80px 24px', background: '#fff7ed' }}>
        <div style={{
          maxWidth: '560px', margin: '0 auto',
          background: '#ffffff', borderRadius: '24px',
          padding: '48px 40px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          border: '1px solid #fed7aa',
        }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#1c1917', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>
            Your Donation
          </h2>
          <p style={{ color: '#78716c', fontSize: '0.9rem', marginBottom: '32px' }}>
            Secure payment powered by Razorpay
          </p>

          {/* Quick amount selector */}
          <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#57534e', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Select Amount
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
            {[100, 250, 500, 1000, 2500, 5000].map((amt) => (
              <button
                key={amt}
                onClick={() => setForm({ ...form, amount: amt })}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: `2px solid ${form.amount === amt ? '#f97316' : '#e7e5e4'}`,
                  background: form.amount === amt ? '#fff7ed' : '#ffffff',
                  color: form.amount === amt ? '#ea580c' : '#57534e',
                  fontWeight: '700', cursor: 'pointer', fontSize: '0.9rem',
                }}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Form fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <input
              type="number"
              name="amount"
              placeholder="Custom amount (₹)"
              value={form.amount}
              onChange={handleChange}
              style={{
                padding: '14px 18px', borderRadius: '12px',
                border: '1.5px solid #e7e5e4', fontSize: '0.95rem', outline: 'none',
              }}
            />
            {[
              { name: 'name', placeholder: 'Full Name', type: 'text' },
              { name: 'email', placeholder: 'Email Address', type: 'email' },
              { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                style={{
                  padding: '14px 18px', borderRadius: '12px',
                  border: '1.5px solid #e7e5e4', fontSize: '0.95rem', outline: 'none',
                }}
              />
            ))}

            <button
              onClick={handleDonate}
              disabled={loading}
              style={{
                padding: '16px',
                background: loading ? '#d97706' : '#f97316',
                color: 'white', fontWeight: '900',
                borderRadius: '12px', border: 'none',
                fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer',
                letterSpacing: '1px', textTransform: 'uppercase',
                marginTop: '8px',
              }}
            >
              {loading ? 'Processing...' : `Donate ₹${form.amount}`}
            </button>
          </div>

          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.8rem', color: '#a8a29e' }}>
            🔒 Secured by Razorpay • 80G Tax Exemption Available
          </p>
        </div>
      </section>
    </main>
  )
}

export default Donate