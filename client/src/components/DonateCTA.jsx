import { useEffect, useRef, useState } from 'react'

const DonateCTA = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #7c2d00 0%, #c2410c 60%, #d97706 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '700px', margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '20px' }}>
          Make a Difference Today
        </p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', color: '#ffffff', fontFamily: 'Georgia, serif', lineHeight: 1.2, marginBottom: '20px' }}>
          Your ₹50 Can Feed<br />a Child for a Day
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#fed7aa', lineHeight: 1.8, marginBottom: '40px' }}>
          Every rupee you donate goes directly to feeding programs.
          We maintain 100% transparency in how donations are used.
        </p>

        {/* Donation amounts */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '36px' }}>
          {['₹50', '₹100', '₹500', '₹1000', 'Custom'].map((amt, i) => (
            <a
              key={i}
              href="https://pages.razorpay.com/bangalorefoodbank"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 24px',
                background: i === 2 ? '#ffffff' : 'rgba(255,255,255,0.15)',
                color: i === 2 ? '#c2410c' : '#ffffff',
                fontWeight: '700',
                borderRadius: '999px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              {amt}
            </a>
          ))}
        </div>

        <a
          href="https://pages.razorpay.com/bangalorefoodbank"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: '#ffffff',
            color: '#c2410c',
            fontWeight: '900',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
          }}
        >
          Donate Now 🙏
        </a>

        <p style={{ marginTop: '20px', fontSize: '0.82rem', color: 'rgba(255,237,213,0.7)' }}>
          80G Tax Exemption Available • 100% Secure via Razorpay
        </p>
      </div>
    </section>
  )
}

export default DonateCTA