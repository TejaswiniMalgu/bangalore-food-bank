import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 1500000, suffix: '+', label: 'Feeds Served', icon: '🍱' },
  { number: 500000, suffix: '+ Kgs', label: 'Food Rescued', icon: '🌾' },
  { number: 70, suffix: '+', label: 'NGO Partners', icon: '🤝' },
  { number: 50000, suffix: '+', label: 'Lives Touched', icon: '❤️' },
]

const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K'
  return num
}

const CountUp = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, target, duration])

  return <span ref={ref}>{formatNumber(count)}</span>
}

const StatsSection = () => {
  return (
    <section
      style={{
        background: '#fff7ed',
        padding: '80px 24px',
        borderTop: '4px solid #f97316',
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#f97316',
          marginBottom: '12px',
        }}>
          Our Impact
        </p>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: '900',
          color: '#1c1917',
          fontFamily: 'Georgia, serif',
          lineHeight: 1.2,
        }}>
          Every Number Represents a Life
        </h2>
        <p style={{
          marginTop: '16px',
          color: '#78716c',
          fontSize: '1rem',
          maxWidth: '500px',
          margin: '16px auto 0',
          lineHeight: 1.7,
        }}>
          Since 2014, Bangalore Food Bank has been turning surplus food into
          dignity and nourishment for thousands across the city.
        </p>
      </div>

      {/* Stats Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px 24px',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
              border: '1px solid #fed7aa',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(249,115,22,0.15)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.07)'
            }}
          >
            {/* Icon */}
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              {stat.icon}
            </div>

            {/* Number */}
            <div style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '900',
              color: '#ea580c',
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              <CountUp target={stat.number} />
              <span style={{ fontSize: '1.5rem' }}>{stat.suffix}</span>
            </div>

            {/* Label */}
            <p style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#57534e',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection