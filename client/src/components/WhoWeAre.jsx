import { useEffect, useRef, useState } from 'react'

const WhoWeAre = () => {
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
      id="who_we_are"
      ref={ref}
      style={{
        padding: '100px 24px',
        background: '#ffffff',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left — Text Content */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.8s ease',
          }}
        >
          {/* Label */}
          <p style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#f97316',
            marginBottom: '16px',
          }}>
            Who We Are
          </p>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: '900',
            color: '#1c1917',
            fontFamily: 'Georgia, serif',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            Fighting Hunger,<br />
            <span style={{ color: '#ea580c' }}>One Meal at a Time</span>
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1rem',
            color: '#57534e',
            lineHeight: 1.9,
            marginBottom: '20px',
          }}>
            Bangalore Food Bank is a non-profit organization dedicated to
            eliminating hunger and reducing food wastage in Bengaluru. We
            act as a bridge between food donors and communities in need,
            ensuring that surplus food reaches the most vulnerable sections
            of society.
          </p>

          <p style={{
            fontSize: '1rem',
            color: '#57534e',
            lineHeight: 1.9,
            marginBottom: '36px',
          }}>
            Founded in 2014, we are a proud member of the Global FoodBanking
            Network, upholding international standards of food safety,
            dignity, and sustainability in everything we do.
          </p>

          {/* Key Points */}
          {[
            'Zero hunger through community partnerships',
            'Strict food safety & quality standards',
            'Transparent operations & verified impact',
          ].map((point, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '14px',
              }}
            >
              <span style={{
                width: '22px',
                height: '22px',
                background: '#fff7ed',
                border: '2px solid #f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '11px',
                color: '#ea580c',
                fontWeight: '900',
                marginTop: '2px',
              }}>
                ✓
              </span>
              <p style={{
                fontSize: '0.95rem',
                color: '#44403c',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {point}
              </p>
            </div>
          ))}

          {/* CTA */}
          <a
            href="https://pages.razorpay.com/bangalorefoodbank"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '36px',
              padding: '14px 32px',
              background: '#f97316',
              color: '#ffffff',
              fontWeight: '700',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              boxShadow: '0 8px 24px rgba(249,115,22,0.3)',
            }}
          >
            Support Our Mission
          </a>
        </div>

        {/* Right — Visual Card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.8s ease 0.2s',
          }}
        >
          {/* Main Visual Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
              borderRadius: '24px',
              padding: '48px 40px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative circle */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '180px',
              height: '180px',
              background: 'rgba(255,255,255,0.07)',
              borderRadius: '50%',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '140px',
              height: '140px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%',
            }} />

            <p style={{
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#fed7aa',
              marginBottom: '16px',
            }}>
              Our Vision
            </p>
            <h3 style={{
              fontSize: '1.6rem',
              fontWeight: '800',
              fontFamily: 'Georgia, serif',
              lineHeight: 1.3,
              marginBottom: '24px',
            }}>
              "A hunger-free Bengaluru where no food goes to waste"
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#fed7aa',
              lineHeight: 1.8,
            }}>
              We envision a city where every person has access to safe,
              nutritious food — and where communities, businesses, and
              individuals work together to make that vision a reality.
            </p>

            {/* Mini stats inside card */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '36px',
            }}>
              {[
                { num: '2014', label: 'Founded' },
                { num: '70+', label: 'NGO Partners' },
                { num: '12+', label: 'Years of Service' },
                { num: '100%', label: 'Non-Profit' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    color: '#fb923c',
                  }}>
                    {item.num}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#fed7aa',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '4px',
                  }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre