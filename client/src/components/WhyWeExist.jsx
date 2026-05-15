import { useEffect, useRef, useState } from 'react'

const problems = [
  {
    icon: '😔',
    title: '40 Crore Indians Sleep Hungry',
    desc: 'India has one of the highest rates of hunger in the world. Millions go to bed without a proper meal every single night.',
  },
  {
    icon: '🗑️',
    title: '40% Food is Wasted in India',
    desc: 'Nearly 40% of food produced in India is wasted before it reaches the consumer — enough to feed every hungry person twice over.',
  },
  {
    icon: '🏙️',
    title: 'Urban Hunger is Invisible',
    desc: 'In cities like Bengaluru, hunger is hidden. Daily wage workers, migrant laborers, and homeless families suffer silently.',
  },
  {
    icon: '📉',
    title: 'Malnutrition Affects Millions',
    desc: 'Children and women bear the heaviest burden of malnutrition, affecting their health, education, and future opportunities.',
  },
]

const WhyWeExist = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="why_we_exist"
      ref={ref}
      style={{
        padding: '100px 24px',
        background: '#1c1917',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-60px',
        right: '-60px',
        width: '400px',
        height: '400px',
        background: 'rgba(234,88,12,0.08)',
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        left: '-60px',
        width: '350px',
        height: '350px',
        background: 'rgba(234,88,12,0.06)',
        borderRadius: '50%',
        filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '72px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease',
          }}
        >
          <p style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#f97316',
            marginBottom: '16px',
          }}>
            Why We Exist
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '900',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            The Problem We Are <br />
            <span style={{ color: '#fb923c' }}>Working to Solve</span>
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#a8a29e',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            While tons of food is wasted every day, millions go hungry.
            Bangalore Food Bank exists to close this gap — with urgency,
            compassion, and proven systems.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '72px',
          }}
        >
          {problems.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(249,115,22,0.2)',
                borderRadius: '20px',
                padding: '36px 28px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.7s ease ${i * 0.15}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(249,115,22,0.1)'
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: '#ffffff',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#a8a29e',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
            borderRadius: '24px',
            padding: '48px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.6s',
          }}
        >
          {/* decorative circles */}
          <div style={{
            position: 'absolute', top: '-30px', right: '-30px',
            width: '150px', height: '150px',
            background: 'rgba(255,255,255,0.06)', borderRadius: '50%',
          }} />
          <div style={{
            position: 'absolute', bottom: '-30px', left: '-30px',
            width: '120px', height: '120px',
            background: 'rgba(255,255,255,0.04)', borderRadius: '50%',
          }} />

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: '700',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto 28px',
            position: 'relative',
            zIndex: 1,
          }}>
            "The world produces enough food to feed everyone.
            The problem is not scarcity — it's distribution."
          </p>

          <a
            href="https://pages.razorpay.com/bangalorefoodbank"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '13px 32px',
              background: '#ffffff',
              color: '#c2410c',
              fontWeight: '800',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              position: 'relative',
              zIndex: 1,
            }}
          >
            Be Part of the Solution
          </a>
        </div>

      </div>
    </section>
  )
}

export default WhyWeExist