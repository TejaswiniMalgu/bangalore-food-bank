import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Who We Are', href: '/#who_we_are' },
  { label: 'Why We Exist', href: '/#why_we_exist' },
  { label: 'What We Do', href: '/#what_we_do' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Get Involved', href: '/get-involved' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-orange-600 tracking-wide">
                BANGALORE
              </span>
              <span className="text-sm font-semibold text-gray-700 tracking-widest uppercase">
                Food Bank
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Donate Button — now links to internal /donate page */}
            <Link
              to="/donate"
              className="ml-4 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Donate Button — internal /donate page */}
          <Link
            to="/donate"
            className="w-full text-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-full shadow transition-all uppercase tracking-wide"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar