const Footer = () => {
  return (
    <footer style={{ background: '#0c0a09', color: '#a8a29e', fontFamily: 'sans-serif' }}>

      {/* Main Footer */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        padding: '72px 24px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '48px',
      }}>

        {/* Brand */}
        <div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#f97316' }}>BANGALORE</div>
            <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#d6d3d1', letterSpacing: '3px', textTransform: 'uppercase' }}>Food Bank</div>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.8, color: '#78716c', marginBottom: '24px' }}>
            A non-profit fighting hunger and food wastage in Bengaluru since 2014.
            Member of the Global FoodBanking Network.
          </p>

          <a
            href="https://pages.razorpay.com/bangalorefoodbank"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '10px 24px',
              background: '#f97316', color: '#ffffff',
              fontWeight: '700', borderRadius: '999px',
              textDecoration: 'none', fontSize: '0.85rem',
              textTransform: 'uppercase', letterSpacing: '1px',
            }}
          >
            Donate Now
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Quick Links
          </h4>
          {[
            { label: 'Who We Are', href: '/#who_we_are' },
            { label: 'Why We Exist', href: '/#why_we_exist' },
            { label: 'What We Do', href: '/#what_we_do' },
            { label: 'Our Team', href: '/our-team' },
            { label: 'Get Involved', href: '/get-involved' },
            { label: 'Gallery', href: '/gallery' },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              style={{ display: 'block', color: '#78716c', textDecoration: 'none', fontSize: '0.88rem', marginBottom: '10px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f97316'}
              onMouseLeave={e => e.target.style.color = '#78716c'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Programs */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Our Programs
          </h4>
          {[
            'NGO Feeding Program',
            'School Feeding Program',
            'Food Rescue Program',
            'Grain Bank',
            'Community Kitchen',
            'Mother & Child Program',
            'Disaster Relief',
          ].map((prog, i) => (
            <div key={i} style={{ fontSize: '0.88rem', color: '#78716c', marginBottom: '10px' }}>
              {prog}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Contact Us
          </h4>
          {[
            { icon: '📍', text: 'Bengaluru, Karnataka, India' },
            { icon: '📞', text: '+91 98765 43210' },
            { icon: '✉️', text: 'info@bangalorefoodbank.com' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '14px', fontSize: '0.88rem', color: '#78716c' }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}

          {/* Social */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
            {[
              { label: 'FB', href: 'https://facebook.com' },
              { label: 'TW', href: 'https://twitter.com' },
              { label: 'IG', href: 'https://instagram.com' },
              { label: 'YT', href: 'https://youtube.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px', height: '36px',
                  background: 'rgba(249,115,22,0.15)',
                  border: '1px solid rgba(249,115,22,0.3)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#f97316', fontWeight: '800', fontSize: '0.75rem',
                  textDecoration: 'none',
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 24px',
        textAlign: 'center',
        fontSize: '0.82rem',
        color: '#57534e',
      }}>
        © 2025 Bangalore Food Bank. All Rights Reserved. |{' '}
        <span style={{ color: '#f97316' }}>80G Certified Non-Profit</span>
        {' '}| Designed with ❤️ for a hunger-free Bengaluru
      </div>

    </footer>
  )
}

export default Footer