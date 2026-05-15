const photos = [
  { emoji: '🍱', label: 'Food Packing Drive' },
  { emoji: '🚚', label: 'Food Collection' },
  { emoji: '👨‍👩‍👧', label: 'Community Feeding' },
  { emoji: '🏫', label: 'School Program' },
  { emoji: '🤝', label: 'Volunteer Day' },
  { emoji: '🌾', label: 'Grain Bank' },
  { emoji: '👵', label: 'Old Age Home' },
  { emoji: '🎉', label: 'Annual Event' },
  { emoji: '🏥', label: 'Health Camp' },
]

const Gallery = () => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={{
        background: 'linear-gradient(135deg, #7c2d00, #c2410c)',
        padding: '80px 24px', textAlign: 'center', color: 'white',
      }}>
        <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#fed7aa', marginBottom: '16px' }}>Moments</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '900', fontFamily: 'Georgia, serif' }}>Photo Gallery</h1>
      </section>

      <section style={{ padding: '80px 24px', background: '#fff7ed' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                borderRadius: '20px',
                height: '220px',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                border: '1px solid #fed7aa',
                fontSize: '4rem',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {photo.emoji}
              <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#57534e', marginTop: '12px', letterSpacing: '1px' }}>
                {photo.label}
              </p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#78716c', marginTop: '40px', fontSize: '0.9rem' }}>
          📸 Real photos will be added when you have the actual images from the organization.
        </p>
      </section>
    </main>
  )
}

export default Gallery