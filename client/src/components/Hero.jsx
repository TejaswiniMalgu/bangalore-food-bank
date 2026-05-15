import { useEffect, useState } from 'react'

const Hero = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-700 to-yellow-600" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div
          className={`inline-block mb-6 px-4 py-1.5 bg-orange-500/30 border border-orange-400/50 rounded-full text-orange-200 text-xs font-semibold uppercase tracking-widest transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          A Global FoodBanking Network Partner
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Meeting the <br />
          <span className="text-orange-400">Challenge</span> of Hunger
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg md:text-xl text-orange-100/90 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          The Bangalore Food Bank Process — connecting donors, food, and communities
          to eradicate hunger and prevent food wastage across Bengaluru.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Watch Video Button */}
          <a
            href="https://www.youtube.com/watch?v=VCXsyk8KWc0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3.5 bg-white text-orange-700 font-bold rounded-full shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-200"
          >
            <span className="w-8 h-8 flex items-center justify-center bg-orange-500 rounded-full text-white text-sm">
              ▶
            </span>
            Watch Our Story
          </a>

          {/* Donate Button */}
          <a
            href="https://pages.razorpay.com/bangalorefoodbank"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200 uppercase tracking-wide"
          >
            Donate Now
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-20 flex flex-col items-center gap-2 text-orange-200/60 transition-all duration-700 delay-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-orange-300/60 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  )
}

export default Hero