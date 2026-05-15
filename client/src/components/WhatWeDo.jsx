import { useEffect, useRef, useState } from 'react'

const programs = [
  {
    icon: '🏢',
    title: 'NGO Feeding Program',
    desc: 'We partner with 70+ NGOs across Bengaluru to ensure regular food supply reaches orphanages, old age homes, and rehabilitation centers.',
    color: '#ea580c',
  },
  {
    icon: '🏫',
    title: 'School Feeding Program',
    desc: 'Providing nutritious meals to underprivileged school children, improving attendance, concentration, and overall health outcomes.',
    color: '#d97706',
  },
  {
    icon: '🚚',
    title: 'Food Rescue Program',
    desc: 'Collecting surplus food from hotels, caterers, events, and corporates — ensuring good food never goes to waste.',
    color: '#16a34a',
  },
  {
    icon: '🌾',
    title: 'Grain Bank',
    desc: 'Storing and distributing dry rations like rice, dal, and flour to families in need, especially during emergencies and festivals.',
    color: '#ca8a04',
  },
  {
    icon: '🥗',
    title: 'Community Kitchen',
    desc: 'Running community kitchens that prepare and serve hot, hygienic meals to daily wage workers, migrants, and the homeless.',
    color: '#dc2626',
  },
  {
    icon: '🤱',
    title: 'Mother & Child Program',
    desc: 'Targeted nutrition support for pregnant women, lactating mothers, and children under 5 to fight malnutrition at its root.',
    color: '#9333ea',
  },
  {
    icon: '🆘',
    title: 'Disaster Relief',
    desc: 'Rapid food relief during floods, droughts, pandemics, and other crises — reaching affected communities within hours.',
    color: '#0891b2',
  },
]

const WhatWeDo = () => {
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
      id="what_we_do"
      ref={ref}
      style={{
        padding: '100px 24px',
        background: '#fff7ed',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

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
            What We Do
          </p>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '900',
            color: '#1c1917',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.2,
            marginBottom: '20px',
          }}>
            Our Programs &amp; Initiatives
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#78716c',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            From rescuing surplus food to feeding school children — every
            program we run is designed to create lasting impact in the
            communities we serve.
          </p>
        </div>

        {/* Programs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {programs.map((program, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '36px 28px',
                borderTop: `4px solid ${program.color}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.12)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: `${program.color}15`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  marginBottom: '20px',
                }}
              >
                {program.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: '#1c1917',
                marginBottom: '12px',
                lineHeight: 1.3,
              }}>
                {program.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#78716c',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {program.desc}
              </p>

              {/* Learn more link */}
              <div
                style={{
                  marginTop: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  color: program.color,
                  letterSpacing: '0.5px',
                }}
              >
                Learn more →
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '64px',
            opacity: visible ? 1 : 0,
            transition: 'all 0.7s ease 0.8s',
          }}
        >
          <p style={{
            fontSize: '1rem',
            color: '#78716c',
            marginBottom: '24px',
          }}>
            Want to support a specific program?
          </p>
          <a
            href="https://pages.razorpay.com/bangalorefoodbank"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              background: '#f97316',
              color: '#ffffff',
              fontWeight: '700',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '0.95rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(249,115,22,0.35)',
            }}
          >
            Donate to a Program
          </a>
        </div>

      </div>
    </section>
  )
}

export default WhatWeDo