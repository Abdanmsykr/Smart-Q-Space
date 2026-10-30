import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="navbar-inner">
            <a href="#" className="navbar-brand">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo-opt.png"
                  alt="SmartQSpace Logo"
                  width="160"
                  height="48"
                  decoding="async"
                />
              </picture>
            </a>
            <div className="navbar-menu" id="desktop-menu">
              <a href="#beranda">Beranda</a>
              <a href="#program">Program</a>
              <a href="#paket">Paket</a>
              <a href="#tentang">Tentang Kami</a>
              <a href="#pendaftaran">Pendaftaran</a>
            </div>
            <div className="navbar-cta">
              <a href="#pendaftaran" className="btn btn-primary btn-sm">
                <i className="fa-solid fa-paper-plane"></i> Daftar Sekarang
              </a>
            </div>
            <button
              className="mobile-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        <a href="#beranda" onClick={closeMenu}>Beranda</a>
        <a href="#program" onClick={closeMenu}>Program</a>
        <a href="#paket" onClick={closeMenu}>Paket</a>
        <a href="#tentang" onClick={closeMenu}>Tentang Kami</a>
        <a href="#pendaftaran" onClick={closeMenu}>Pendaftaran</a>
        <a href="#pendaftaran" className="btn btn-primary" onClick={closeMenu}>
          <i className="fa-solid fa-paper-plane"></i> Daftar Sekarang
        </a>
      </div>
    </>
  )
}

export default Navbar
