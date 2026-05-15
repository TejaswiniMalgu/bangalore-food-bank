import { useEffect, useRef, useState } from 'react'

const partnerNames = [
  'Infosys Foundation', 'Wipro Cares', 'HDFC Bank', 'Rotary Club',
  'Lions Club', 'United Way', 'Give India', 'Robin Hood Army',
]

const PartnersSection = () => {
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
      style={{ padding: '80px 24px', background: '#fff7ed', borderTop: '1px solid #fed7aa' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', marginBottom: '48px',
          opacity: visible ? 1 : 0,
          transition: 'all 0.7s ease',
        }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#f97316', marginBottom: '12px' }}>
            Our Partners
          </p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#1c1917', fontFamily: 'Georgia, serif' }}>
            Supported By Organizations <span style={{ color: '#ea580c' }}>Who Care</span>
          </h2>
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap',
          justifyContent: 'center', gap: '16px',
          opacity: visible ? 1 : 0,
          transition: 'all 0.7s ease 0.2s',
        }}>
          {partnerNames.map((name, i) => (
            <div
              key={i}
              style={{
                padding: '14px 28px',
                background: '#ffffff',
                border: '1px solid #fed7aa',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#57534e',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection