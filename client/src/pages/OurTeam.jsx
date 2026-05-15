import { useEffect, useRef, useState } from 'react'

const team = [
  { name: 'Sathya Raghu', role: 'Founder & CEO', initial: 'S', desc: 'Visionary leader with 15+ years in social impact and food security.' },
  { name: 'Anitha Reddy', role: 'Operations Head', initial: 'A', desc: 'Manages day-to-day food rescue and distribution across Bengaluru.' },
  { name: 'Kiran Rao', role: 'Partnerships Manager', initial: 'K', desc: 'Builds and nurtures relationships with NGOs, corporates, and donors.' },
  { name: 'Deepa Nair', role: 'Finance & Compliance', initial: 'D', desc: 'Ensures 100% financial transparency and regulatory compliance.' },
  { name: 'Arjun Menon', role: 'Volunteer Coordinator', initial: 'A', desc: 'Leads and motivates our 500+ strong volunteer community.' },
  { name: 'Sunita Patil', role: 'Communications', initial: 'S', desc: 'Spreads the word about our mission through storytelling and media.' },
]

const OurTeam = () => {
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
    <main style={{ paddingTop: '80px' }}>

      {/* Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
        padding: '80px 24px',
        textAlign: 'center',
        color: 'white',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '16px' }}>Meet the People</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>Our Team</h1>
        <p style={{ fontSize: '1rem', color: '#fed7aa', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          Passionate individuals united by one mission — a hunger-free Bengaluru.
        </p>
      </section>

      {/* Team Grid */}
      <section ref={ref} style={{ padding: '80px 24px', background: '#fff7ed' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '40px 28px',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                border: '1px solid #fed7aa',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <div style={{
                width: '80px', height: '80px',
                background: 'linear-gradient(135deg, #f97316, #c2410c)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', fontWeight: '900', color: 'white',
                margin: '0 auto 20px',
              }}>
                {member.initial}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1c1917', marginBottom: '6px' }}>{member.name}</h3>
              <p style={{ fontSize: '0.82rem', fontWeight: '700', color: '#f97316', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>{member.role}</p>
              <p style={{ fontSize: '0.88rem', color: '#78716c', lineHeight: 1.7 }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default OurTeam