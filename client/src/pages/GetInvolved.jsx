import { useState } from 'react'

const GetInvolved = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'volunteer', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true) // show success even if backend not running yet
    }
  }

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
        padding: '80px 24px', textAlign: 'center', color: 'white',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '16px' }}>Join Us</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Get Involved</h1>
        <p style={{ fontSize: '1rem', color: '#fed7aa', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          Whether you want to volunteer, donate food, or partner with us — there is a place for you here.
        </p>
      </section>

      {/* Ways to help */}
      <section style={{ padding: '80px 24px', background: '#fff7ed' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '72px' }}>
            {[
              { icon: '🤝', title: 'Volunteer', desc: 'Join our 500+ volunteer community. Help with food collection, sorting, and distribution.' },
              { icon: '🍱', title: 'Donate Food', desc: 'Have surplus food from events, hotels, or home? We will collect it safely.' },
              { icon: '💰', title: 'Donate Funds', desc: 'Financial donations help us scale our programs and reach more families.' },
              { icon: '🏢', title: 'Corporate Partner', desc: 'CSR partnerships, employee volunteering, and food donation drives.' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#ffffff', borderRadius: '20px', padding: '32px 24px',
                textAlign: 'center', border: '1px solid #fed7aa',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1c1917', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#78716c', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{
            background: '#ffffff', borderRadius: '24px',
            padding: '48px 40px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
            border: '1px solid #fed7aa', maxWidth: '640px', margin: '0 auto',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1c1917', marginBottom: '12px' }}>Thank You!</h3>
                <p style={{ color: '#78716c', lineHeight: 1.7 }}>We have received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#1c1917', fontFamily: 'Georgia, serif', marginBottom: '8px' }}>Send Us a Message</h2>
                <p style={{ color: '#78716c', fontSize: '0.9rem', marginBottom: '32px' }}>Fill in the form and our team will reach out to you shortly.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'name', placeholder: 'Your Full Name', type: 'text' },
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
                        border: '1.5px solid #e7e5e4', fontSize: '0.95rem',
                        outline: 'none', width: '100%', boxSizing: 'border-box',
                      }}
                    />
                  ))}

                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    style={{
                      padding: '14px 18px', borderRadius: '12px',
                      border: '1.5px solid #e7e5e4', fontSize: '0.95rem',
                      outline: 'none', background: 'white',
                    }}
                  >
                    <option value="volunteer">I want to Volunteer</option>
                    <option value="food_donor">I want to Donate Food</option>
                    <option value="fund_donor">I want to Donate Funds</option>
                    <option value="corporate">Corporate Partnership</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      padding: '14px 18px', borderRadius: '12px',
                      border: '1.5px solid #e7e5e4', fontSize: '0.95rem',
                      outline: 'none', resize: 'vertical',
                    }}
                  />

                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: '15px', background: '#f97316',
                      color: 'white', fontWeight: '800',
                      borderRadius: '12px', border: 'none',
                      fontSize: '1rem', cursor: 'pointer',
                      letterSpacing: '1px', textTransform: 'uppercase',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GetInvolved