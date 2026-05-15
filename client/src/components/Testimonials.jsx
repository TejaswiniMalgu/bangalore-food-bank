import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Beneficiary, Whitefield',
    text: 'Because of Bangalore Food Bank, my children eat a proper meal every day. We were struggling after I lost my job. This organization gave us hope.',
    initial: 'R',
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Donor, Indiranagar',
    text: 'We started donating surplus food from our office cafeteria. The team is professional, prompt, and the impact reports they share are very transparent.',
    initial: 'P',
  },
  {
    name: 'Sr. Mary Thomas',
    role: 'NGO Partner, Shanthi Nagar',
    text: 'For our old age home of 60 residents, Bangalore Food Bank has been a lifeline. Their consistency and quality of food is remarkable.',
    initial: 'M',
  },
]

const Testimonials = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{ padding: '100px 24px', background: '#1c1917' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '64px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease',
        }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#f97316', marginBottom: '16px' }}>
            Voices of Impact
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', color: '#ffffff', fontFamily: 'Georgia, serif' }}>
            Stories That <span style={{ color: '#fb923c' }}>Inspire Us</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(249,115,22,0.2)',
                borderRadius: '20px',
                padding: '36px 28px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: '3rem', color: '#f97316', lineHeight: 1, marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
                "
              </div>

              <p style={{ fontSize: '0.95rem', color: '#d6d3d1', lineHeight: 1.8, marginBottom: '28px' }}>
                {t.text}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: '#f97316',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', fontWeight: '800', color: 'white',
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#a8a29e' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials