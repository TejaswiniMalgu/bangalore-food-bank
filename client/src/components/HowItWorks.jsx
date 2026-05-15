import { useEffect, useRef, useState } from 'react'

const steps = [
  { icon: '🏭', title: 'Food Donors', desc: 'Hotels, corporates, caterers, and individuals donate surplus food or funds.' },
  { icon: '🚚', title: 'Collection', desc: 'Our trained volunteers collect food safely following strict hygiene protocols.' },
  { icon: '🏪', title: 'Sorting & Storage', desc: 'Food is inspected, sorted, and stored at our food bank facility.' },
  { icon: '🤝', title: 'Distribution', desc: 'Packed and distributed to 70+ NGO partners and community feeding points.' },
  { icon: '😊', title: 'Beneficiaries', desc: 'Thousands of hungry families, children, and elderly receive nutritious meals.' },
]

const HowItWorks = () => {
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
      style={{ padding: '100px 24px', background: '#ffffff' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', marginBottom: '72px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease',
        }}>
          <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#f97316', marginBottom: '16px' }}>
            The Process
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '900', color: '#1c1917', fontFamily: 'Georgia, serif', lineHeight: 1.2, marginBottom: '20px' }}>
            How It <span style={{ color: '#ea580c' }}>Works</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#78716c', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
            From donor to plate — our streamlined process ensures food reaches the right people at the right time.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0',
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '180px',
                margin: '16px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Circle */}
              <div style={{
                width: '80px', height: '80px',
                background: i % 2 === 0 ? '#f97316' : '#fff7ed',
                border: '3px solid #f97316',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '16px',
                boxShadow: '0 8px 24px rgba(249,115,22,0.2)',
              }}>
                {step.icon}
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: `calc(${(i + 1) * 212}px - 24px)`,
                  top: '54px',
                  fontSize: '1.5rem',
                  color: '#f97316',
                  display: window.innerWidth > 768 ? 'block' : 'none',
                }}>
                  →
                </div>
              )}

              {/* Step number */}
              <div style={{
                fontSize: '11px', fontWeight: '800',
                color: '#f97316', letterSpacing: '2px',
                textTransform: 'uppercase', marginBottom: '8px',
              }}>
                Step {i + 1}
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: '800', color: '#1c1917', textAlign: 'center', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#78716c', textAlign: 'center', lineHeight: 1.7, margin: 0 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HowItWorks