const partners = [
  { name: 'Infosys Foundation', type: 'Corporate' },
  { name: 'Wipro Cares', type: 'Corporate' },
  { name: 'HDFC Bank', type: 'Banking' },
  { name: 'Rotary Club Bengaluru', type: 'Service Club' },
  { name: 'Lions Club International', type: 'Service Club' },
  { name: 'United Way Bengaluru', type: 'NGO' },
  { name: 'Give India', type: 'Platform' },
  { name: 'Robin Hood Army', type: 'Volunteer Network' },
  { name: 'Global FoodBanking Network', type: 'International' },
]

const Partners = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{
        background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
        padding: '80px 24px', textAlign: 'center', color: 'white',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '16px' }}>Together We Are Stronger</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', fontFamily: 'Georgia, serif' }}>Our Partners</h1>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff7ed' }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {partners.map((p, i) => (
            <div key={i} style={{
              background: '#ffffff', borderRadius: '16px',
              padding: '28px 24px',
              border: '1px solid #fed7aa',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column', gap: '8px',
            }}>
              <div style={{
                fontSize: '0.7rem', fontWeight: '700',
                color: '#f97316', textTransform: 'uppercase', letterSpacing: '1.5px',
              }}>
                {p.type}
              </div>
              <div style={{ fontSize: '1rem', fontWeight: '800', color: '#1c1917' }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Partners